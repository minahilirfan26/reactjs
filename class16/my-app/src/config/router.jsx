import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Profile from "../pages/profile";
import { auth,onAuthStateChanged } from "../config/firebase";
import { useEffect, useState } from "react";
import AppLayout from "../components/Layout";
import Portfolio from "../components/Portfolio";

let AppRouter = () => {
    let [user , setUser] = useState(false)
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    setUser(true)
    // ...
  } else {
    // User is signed out
    // ...
    setUser(false)
  }
});
    },[])
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={user ? <Navigate to='/profile'/> : <Login/> }/>
            <Route path="/signup" element={user ? <Navigate to='/profile'/> : <SignUp/>}/>
            <Route path="/profile" element={user ? <AppLayout>
                <Profile/>
            </AppLayout> : <Navigate to='/'/>} >
<Route path="portfolio" element={<Portfolio/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter