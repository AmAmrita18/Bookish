import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../contects/AuthProvider";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState("error");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;

        createUser(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
             alert("Sign up successfully!");
             navigate(from, {replace: true})
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }
  return (
    <div className="min-h-screen bg-yellow py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue to-blue-extra-dark shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-off-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold">Join Us, Bibliophile!</h1>
                    </div>
                    <div className="divide-y divide-yellow">
                        <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-off-white sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input id="email" name="email" type="text" className="pl-2 h-10 w-full text-[16.5px] text-blue focus:outline-none focus-border-yellow rounded" placeholder="Email Address"/>
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" className="pl-2 h-10 w-full text-[16.5px] text-blue focus:outline-none focus-border-yellow rounded-md" placeholder="Password"/>
                            </div>
                            <p className="text-blue text-xs">Already have an account? Please <Link to="/login" className="text-blue-extra-dark underline font-semibold">Login</Link> here! </p>
                            <div className="relative">
                                <button className="bg-blue hover:bg-blue-extra-dark text-off-white h-10 text-[16.5px] rounded-md px-4 py-1">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignUp