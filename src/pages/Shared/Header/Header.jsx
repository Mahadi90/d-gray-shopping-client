import React, { useContext } from "react";
import logo from "../../../assets/images/logonew.jpeg";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const navItem = (
    <>
      <NavLink to="/" className="mx-2 font-bold px-4 py-2">
        <li>Home</li>
      </NavLink>
      <NavLink to="/shop" className="mx-2 font-bold px-4 py-2">
        <li>Shop</li>
      </NavLink>
      <NavLink to="/about" className="mx-2 font-bold px-4 py-2">
        <li>About Us</li>
      </NavLink>
      <NavLink to="/contact" className="mx-2 font-bold px-4 py-2">
        <li>Contact Us</li>
      </NavLink>
    </>
  );


  const handlelogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out now",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!"
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
        .then()

 Swal.fire({
          title: "Log Out",
          text: "You are logged out now",
          icon: "success"
        });
       
      }
    });
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-300 w-72"
          >
            {navItem}
          </ul>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <img className="w-14 h-14" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <button>
          <FaSearch className="h-6 w-6 mx-2" />
        </button>
        <button>
          <FaShoppingCart className="h-6 w-6 mx-2" />
        </button>
        {
          user?   <>
        {
          user.photoURL ? <div className="tooltip tooltip-bottom" data-tip={`${user.displayName}`}>
            <img className="w-8 h-8  rounded-full" src={user?.photoURL} alt="photo" />
          </div>:
          <div className="tooltip tooltip-bottom" data-tip={`${user.displayName}`}>
            <FaUser className="h-6 w-6 mx-2" />
          </div>
        }
        
         <button onClick={handlelogout} className="mr-1 text-primary font-bold">Logout</button>
          </>  :
          <Link to='/login' className="mr-1 text-primary font-bold">Login</Link>
        }
       |
        <Link to='/signup' className="ms-1 text-primary font-bold">SignUp</Link>
        
      </div>
    </div>
  );
};

export default Header;
