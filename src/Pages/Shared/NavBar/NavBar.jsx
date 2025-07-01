import React from 'react';
import { Link, NavLink } from 'react-router';
import ProFastLogo from '../ProFastLogo/ProFastLogo';
import useAuth from '../../../hooks/useAuth';
import { MdArrowOutward } from 'react-icons/md';

const NavBar = () => {
    const { logOut, setAuthLoading, user } = useAuth();

    // Redirection to the desired location
    // const location = useLocation()


    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('User SigndOut Successfully.')
                setAuthLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setAuthLoading(false); // Always reset loading
            });
    }
    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/coverage'}>Coverage</NavLink></li>
        <li><NavLink to={'/aboutUs'}>About Us</NavLink></li>
        <li><NavLink to={'/pricing'}>Pricing</NavLink></li>
        <li><NavLink to={'/sendParcel'}>Send A Parcel</NavLink></li>
        {
            user && <>
                    <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
            </>
        }
        <li><NavLink to={'/rider'}>Be a Rider</NavLink></li>
    </>
    return (
        <div className='bg-gray-100 pt-4'>
            <div className="navbar  bg-base-100 shadow-sm min-w-sm w-full rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <ProFastLogo></ProFastLogo>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            navItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            (
                                <div className='flex justify-center items-center gap-2'>
                                    <p>{user?.displayName}</p>
                                    <button onClick={handleLogout} className="btn btn-sm py-0.5 btn-primary rounded-3xl">Logout</button>
                                </div>
                            )
                            :
                            (
                                <Link className='' to={'/login'}>
                                    <button className="btn-sm px-2 btn rounded-xl py-0.5 mr-3">Sign In</button>
                                    <button className="btn-sm px-2 btn rounded-xl py-0.5 bg-[#CAEB66]">Be a Rider</button>
                                    <button className="btn-sm btn rounded-full text-[#CAEB66] ml-2 bg-[#161616]"><MdArrowOutward /></button>
                                </Link>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;