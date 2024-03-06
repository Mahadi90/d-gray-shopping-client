import React, { useContext, useState } from 'react';

import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const Signup = () => {
    const {createUser, googleLogin, updatenewProfile} = useContext(AuthContext)
    const [error, setError] = useState('')
 
     const handleSignup = e => {
         e.preventDefault()
  
          setError('')
         const form = e.target;
         const name = form.name.value;
         const email = form.email.value;
         const password = form.password.value;
         // console.log(email, password)
         
         createUser(email, password)
         .then(result => {
             const createdUser = result.user;
             console.log(createdUser)
             Swal.fire({
                position: "center",
                icon: "success",
                title: "You have Signed up  successfully",
                showConfirmButton: false,
                timer: 1500
              });
              updatenewProfile(name)
              form.reset()
         })
         .catch(error => {
             console.log(error.message)
             setError(error.message)
         })
     }

     const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
     }
 
   return (
     <div className="hero min-h-screen bg-base-200">
       <div className="hero-content flex-col lg:flex-row-reverse">
       <button onClick={handleGoogleLogin} className="btn bg-red-500 text-white hover:bg-red-500">
          Login with your google accounts
          <FaGoogle></FaGoogle>
        </button>
         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <form onSubmit={handleSignup} className="card-body">
           <h1 className="text-3xl font-bold">Create a new account</h1>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Name</span>
               </label>
               <input
               name="name"
                 type="text"
                 placeholder="Name"
                 className="input input-bordered"
                 required
               />
             </div>
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
               <button className="btn btn-primary">SignUp</button>
             </div>
           </form>
         </div>
       </div>
     </div>
    );
};

export default Signup;