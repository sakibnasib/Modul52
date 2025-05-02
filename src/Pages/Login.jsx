import React, { use, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContex } from "../provider/AuthProvider";
import { useLocation } from "react-router";

const Login = () => {
  const { signIn,ForgetPassword } = use(AuthContex);
  const emailRef = useRef()
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if(password.length >6){
      setError("must be 6")
      return
    } else {
      setError("");
    }
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };
   const  handleForgetPassword=()=>{
    const email = emailRef.current.value;
    ForgetPassword( email)
    .then(() => {
      alert('A password reset email is sent. Please check your email.')
  })
  .catch(error => {
     alert(error.message);
  })
   }
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  py-5">
        <h2 className=" text-center text-2xl font-semibold ">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              ref={emailRef}
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              
            />
            <div>
              <button onClick={ handleForgetPassword} className="link link-hover">
                Forgot password?
              </button>
            </div>
            {error && <p className=" text-xs text-red-500">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <p className="font-semibold text-center pt-5">
            Dont’t Have An Account ?{" "}
            <Link className="text-secondary" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
