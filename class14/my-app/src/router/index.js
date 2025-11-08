import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import Profile from "../component/Profile";
import AppLayout from "../component/Layout";
import AppNotFound from "../component/NotFound";

function AppRouter(){
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<AppLayout title={"minahil"}>
        <Home/>
    </AppLayout>}/>
    <Route path="/about" element={
        <AppLayout>
            <About/>
        </AppLayout>
    }/>
    <Route path="/profile/:username" element={
        <AppLayout>
            <Profile/>
        </AppLayout>
    }/>
    <Route path="*" element={<AppLayout>
        <AppNotFound/>
    </AppLayout>}/>
</Routes>
</BrowserRouter>
    )
}
export default AppRouter