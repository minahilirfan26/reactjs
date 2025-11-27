import { Outlet } from "react-router-dom";
import AppLayout from "../components/Layout";
import AppCard from "../components/Cards";
import { useState } from "react";
import ChatApp from "../context/Chat";
function Profile(){
    // let [user , setUser] = useState("hello world")
    return(
        <div>
            <ChatApp.Provider>
            <AppLayout>
                <h1>Profile page</h1>
                <AppCard />
            </AppLayout>
            </ChatApp.Provider>
           {/* <div>
            
           </div> */}
        </div>
    )
}

export default Profile