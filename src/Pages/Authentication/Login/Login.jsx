import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
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
            <p className='text-center'><small>Don't Have an Account?<Link className='text-blue-400 btn btn-link' to={'/register'}>Register</Link></small></p>
            <SocialLogin />
        </div>
    );
};

export default Login;