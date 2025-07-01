import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import ProFastLogo from '../Pages/Shared/ProFastLogo/ProFastLogo';
const AuthLayout = () => {
    return (
        <div className="bg-base-200 p-16 min-w-sm">
            <div><ProFastLogo /></div>
            <div className="hero-content flex-col items-center md:flex-row-reverse">
                <div className='flex-1 flex justify-center'>
                    <img
                        src={authImage}
                        alt='auth Image'
                        className="max-w-sm"
                    />
                </div>
                <div className='flex-1 flex justify-center'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;