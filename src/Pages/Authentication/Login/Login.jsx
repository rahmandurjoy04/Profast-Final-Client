import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();

    const location = useLocation();//getting the location property where we have state
    const navigate = useNavigate();//Navigation function to desired route
    const from = location?.state?.from?.pathname || '/';   //Getting the desired state where we want to redirect


    const onSubmit = (data) => {
        signIn(data.email,data.password)
        .then(result=>{
            console.log(result);
            navigate(from);
    })
    }

    
    return (
        <div className=''>
            <h1 className='text-3xl text-center'>Login Now!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset min-w-sm">
                    <label className="label">Email</label>
                    <input type="email" {...register('email')} className="input w-full" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: 6
                    })} className="input w-full" placeholder="Password" />

                    {
                        errors.password?.type === 'required' && <p className='text-xl mt-2 text-red-500'>Password Is Required.</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-xl mt-2 text-red-500'>Password must be at least 6 characters.</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn bg-[#CAEB66] max-w-sm mt-4">Login</button>
                </fieldset>
            </form>
            <p className='text-center'><small>Don't Have an Account?<Link className='text-blue-400 btn btn-link' state={{from:location.state?.from}} to={'/register'}>Register</Link></small></p>
            <SocialLogin />
        </div>
    );
};

export default Login;