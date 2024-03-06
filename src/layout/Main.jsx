import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import { AuthContext } from '../providers/AuthProvider';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
const {user} = useContext(AuthContext)

    return (
        <div>
            <Header></Header>
            <marquee className='bg-black p-2 text-white font-bold' behavior="" direction="">Discount Up to 100% || Buy 1990+ and get delivery charge free</marquee>
            {user?.displayName && <h2 className='font-bold text-primary text-center my-2'>Hi,{user?.displayName}</h2>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;