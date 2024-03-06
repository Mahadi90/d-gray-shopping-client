import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
       return <div className='my-[15%] text-center'><span className="loading loading-bars loading-lg"></span></div>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;