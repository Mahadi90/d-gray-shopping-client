import React, { useContext, useState } from "react";

import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)

    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace : true})
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
        console.log(result.user)
        navigate(from, {replace : true})
    })
    .catch(error => {
        console.log(error.message)
    })
  }
 

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <button
          onClick={handleGoogleLogin}
          className="btn bg-red-500 text-white hover:bg-red-500"
        >
          Login with your google accounts
          <FaGoogle></FaGoogle>
        </button>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login Now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-500">{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
