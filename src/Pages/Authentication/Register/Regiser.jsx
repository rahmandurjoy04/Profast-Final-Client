import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
const Regiser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {createUser} = useAuth()

    const onSubmit = data => {
        createUser(data.email,data.password)
        .then(res=>(console.log(res.user)))
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className=''>
            <h1 className='text-3xl text-center'>Register Now!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', {
                        required: true
                    })} className="input" placeholder="Email" />
                    {
                        errors.email?.type === 'required' && <p className='text-xl mt-2 text-red-500'>Email Is Required.</p>
                    }
                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*\d).+$/
                    },
                    )} className="input" placeholder="Password" />

                    {
                        errors.password?.type === 'required' && <p className='text-xl mt-2 text-red-500'>Password Is Required.</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-xl mt-2 text-red-500'>Password must be at least 6 characters.</p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-xl mt-2 text-red-500'>Password must have capital,small letters and special character.</p>
                    }


                    <button className="btn bg-[#CAEB66] max-w-xs mt-4">Register</button>
                </fieldset>
                <p className='text-center'><small>Already Have an Account?<Link className='text-blue-400 btn btn-link' to={'/login'}>Login</Link></small></p>
            </form>
            <SocialLogin/>
        </div>
    );
};

export default Regiser;