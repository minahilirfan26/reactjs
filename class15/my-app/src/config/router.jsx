import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/login";
import { useState } from "react";
import Profile from "../pages/AppProfile";
import LoginPage from "../pages/login";
import SignUp from "../pages/signup";

function AppRouter(){
    let [user, setUser] = useState(false)
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={user ? <Navigate to="/profile"/> : <LoginPage/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter