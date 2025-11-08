import { Link } from "react-router-dom"
import LoginForm from "../components/LoginhForm"
import { auth, signInWithEmailAndPassword } from "../config/firebase"

function Login(){
    const HandlerLogin = (values)=>{
signInWithEmailAndPassword(auth, values.username , values.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user, "Signin")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
  });
    }
    return(
        <div className="container">
            <div className="row p-5 justify-content-center">
                <div className="col-6 p-5">
                    <h1>Login Page</h1>
                    <LoginForm HandlerLogin={HandlerLogin}/>
                    Don't have an account? <Link to={'/signup'}>SignUp</Link>
                </div>
            </div>

        </div>
    )
}

export default Login