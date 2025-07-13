import React from 'react';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';

const RiderRoute = ({children}) => {
    const { user, authLoading } = useAuth();
    const { role, roleLoading } = useUserRole();

    if (authLoading || roleLoading) {
        return <div className='text-center py-25'>
            <span className='loading loading-spinner loading-xl'></span>
        </div>
    };
    if (!user || role !== 'rider') {
        return <Navigate to="/forbidden" />;
    }
    return children;

};

export default RiderRoute;