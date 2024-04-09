import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Home/Login/Login";
import Signup from "../pages/Home/SignUp/SignUp";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Cart from "../pages/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../pages/dashBoard/DashBoard";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/shop',
                element : <Shop></Shop>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/contact',
                element : <Contact></Contact>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <Signup></Signup>
            },
            {
                path : 'cart',
                element  : <PrivateRoutes><Cart></Cart></PrivateRoutes>
            },
            {
                path : 'dashboard',
                element  : <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>
            }
        ]
    }
])

export default router;