import { useParams, useLocation } from "react-router-dom"
function Profile(){
   console.log(useLocation())
   let {username} = useParams()
//    let uselocation = useLocation()
    return(
        <div>
            Profile Page ({username})
        </div>
    )
}

export default Profile