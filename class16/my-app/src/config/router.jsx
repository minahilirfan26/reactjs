import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Profile from "../pages/profile";
import { auth,onAuthStateChanged } from "../config/firebase";
import { useEffect, useState } from "react";
import AppLayout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import Users from "../components/Users";

let AppRouter = () => {
    let [user , setUser] = useState(null)
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(!!currentUser);
    });
    return () => unsubscribe();
  }, []);
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={user ? <Navigate to='/profile'/> : <Login/> }/>
            <Route path="/signup" element={user ? <Navigate to='/profile'/> : <SignUp/>}/>
            <Route path="/profile" element={user ? 
<Profile/>
: <Navigate to='/'/>} />
<Route path="/user" element={user ? 
<Users/>
: <Navigate to='/'/>}/>
  
            {/* <Route path="/profile" element={<Profile/>}>
<Route path="users" element={<Users/>}/>
            </Route> */}
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
