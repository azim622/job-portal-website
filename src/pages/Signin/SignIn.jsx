import React, { useContext } from "react";
import logInLotte from '../../assets/lottie/login-anim.json'
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import GoogleSignIn from "../../shared/GoogleSignIn";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
    const {signinUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'
    // console.log('location sign in page', location)
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target; // Fixing the typo
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        // console.log(user);

        signinUser(email , password)
        .then(result =>{
            // console.log('signin',result.user)
            // const user = {email:result.user.email}
            // axios.post('https://job-portal-server-livid.vercel.app/jwt', user , {withCredentials:true})
            // .then(res => console.log(res.data))
            navigate(from)
        })
        .catch(error=>{
            // console.log(error.message)
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
            <Lottie animationData={logInLotte}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Login now!</h1>

          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div>
            <GoogleSignIn></GoogleSignIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
