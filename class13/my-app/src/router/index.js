import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Profile from "../component/Profile";
import About from "../component/About";
import AppLayout from "../component/Layout";
import AAppNotFound from "../component/NotFound";
import AppNotFound from "../component/NotFound";

function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout>
                <Home/>
            </AppLayout>}/>
            <Route path="/about" element={
                <AppLayout>
                    <About/>
                </AppLayout>
            }/>
            <Route path="/profile" element={
                <AppLayout>
                    <Profile/>
                </AppLayout>
            }/>
            <Route path="*" element={
                <AppLayout>
                    <AppNotFound/>
                </AppLayout>
            }/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter