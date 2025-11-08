import { Link } from "react-router-dom"
import SignupForm from "../components/SignuoForm"
import { createUserWithEmailAndPassword, auth } from "../config/firebase.js";
function SignUp(){

const HandleSignup = (values)=>{
    createUserWithEmailAndPassword(auth, `${values.username}@portfolio.com`, values.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage)
  });
// console.log(values, "values")

}

    return(
        <div className="container">
            <div className="row p-5 justify-content-center">
                <div className="col-6 p-5">
                    <h1>SignUp Page</h1>
                    <SignupForm HandleSignup={HandleSignup} />
                    Already have an account? <Link to={'/'}>Login</Link>
                </div>
            </div>

        </div>
    )
}
export default SignUp