import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
const Regiser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {createUser , updateUserProfile} = useAuth();

    const [profilePic,setProfilePic] = useState('');

    const handleImageUpload =async(e)=>{
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image',image);
        const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`
        const res =await axios.post(imageUploadUrl,formData);
        setProfilePic(res.data.data.url);
    }

    const onSubmit = data => {
        createUser(data.email,data.password)
        .then(res=>{console.log(res.user);
            // Update user info in the db

            // Update User Profile in firebase
            const userProfile  = {
                displayName: data.name,
                photoURL : profilePic
            }

            updateUserProfile(userProfile)
            .then(()=>{
                console.log('Profile name & picture updated');
            })
            .catch(error=>{
                console.log(error);
            })
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className=''>
            <h1 className='text-3xl text-center'>Register Now!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    {/* Photo */}
                    <label className="label"></label>
                    <input onChange={handleImageUpload} className='input' type="file" placeholder='Upload Profile Picture'/>
                    {/* Name */}
                    <label className="label">Name</label>
                    <input type="text" {...register('name', {
                        required: true
                    })} className="input" placeholder="Name" />
                    {
                        errors.email?.type === 'required' && <p className='text-xl mt-2 text-red-500'>Name Is Required.</p>
                    }
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