import React from 'react';
import useUserRole from '../../../hooks/useUserRole';
import Loading from '../../../Components/Loading';
import UserDashboard from './UserDashboard';
import RiderDashboard from './RiderDashboard';
import AdminDashboard from './AdminDashboard';
import Forbidden from '../../Forbidden/Forbidden';

const DashboardHome = () => {
    const { role ,roleLoading} = useUserRole();
    if(roleLoading){
        return <Loading/>
    }

    if(role === 'user'){
        return <UserDashboard/>
    }
    else if(role === 'rider'){
        return <RiderDashboard/>
    }
    else if(role === 'admin'){
        return <AdminDashboard/>
    }
    else{
        return <Forbidden/>
    }
};

export default DashboardHome;