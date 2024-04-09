import React from "react";
import {
  FaShoppingCart,
  FaCalendar,
  FaWallet,
  FaStar,
  FaMarker,
  FaHome,
  FaBars,
  FaShoppingBag,
  FaUserFriends,
  FaUtensilSpoon,
  FaBook,
  FaEdit
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";


const DashBoard = () => {
  const [cart] = useCart();
  const isAdmin = true;

  return (
    <div className="md:flex">
      <div className="md:w-64 bg-orange-400 md:min-h-screen p-2">
        <h2 className="text-2xl font-bold ps-4">
          BISTRO BOSS <br /> Restaurant
        </h2>
        <ul className="menu">
          {isAdmin ? (
            <>
              {" "}
              <h2 className="text-2xl font-bold text-white flex items-center my-2"><FaHome className="me-2"></FaHome>Admin Home</h2>
              <li>
                <NavLink to="/dashboard/alluser">
                  <FaUserFriends></FaUserFriends>All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/Reservation">
                  <FaUtensilSpoon></FaUtensilSpoon>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaEdit/>
                  manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaBook></FaBook>My Bookings
                </NavLink>
              </li>
            </>
          ) : (
            <>
            <h2 className="text-2xl font-bold text-white flex items-center my-2"><FaHome className="me-2"></FaHome>User Home</h2>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/Reservation">
                  <FaCalendar></FaCalendar>Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaStar />
                  Add review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBookings">
                  <FaMarker />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaShoppingBag />
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        {/* <h2 className="text-5xl font-bold text-center mt-10">Dash Borad</h2> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default DashBoard;