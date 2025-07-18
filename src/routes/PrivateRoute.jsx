import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, authLoading } = useAuth();

    // Redirection to the desired location
    const location = useLocation();
    // const from = location.pathname;



    if (authLoading) {
        return <div className='text-center py-25'>
            <span className='loading loading-spinner loading-xl'></span>
        </div>
    };
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return (
        children
    );
};

export default PrivateRoute;