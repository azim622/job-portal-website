import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottileData from "../../assets/lottie/Animation - 1734113242378.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import GoogleSignIn from "../../shared/GoogleSignIn";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target; // Fixing the typo
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    // console.log(user);

    // const password validation 
    // show password validation error

    createUser(email , password)
    .then(result =>{
      // console.log(result.user)
    })
    .catch(error =>{
      // console.log(error.message)
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottileData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Register now!</h1>

          <form onSubmit={handleRegister} className="card-body">
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="form-control mt-6" >
          <GoogleSignIn></GoogleSignIn>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
