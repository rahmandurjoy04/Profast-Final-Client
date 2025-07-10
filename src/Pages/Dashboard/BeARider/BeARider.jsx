import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import agent from '../../../assets/agent-pending.png';

const BeARider = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const [serviceCenters, setServiceCenters] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("");

    const selectedDistrict = watch("district");

    useEffect(() => {
        fetch('/serviceCenter.json')
            .then(res => res.json())
            .then(data => setServiceCenters(data));
    }, []);

    const regions = [...new Set(serviceCenters.map(s => s.region))];
    const districts = serviceCenters
        .filter(s => s.region === selectedRegion)
        .map(s => s.district);

    const availableWarehouses = serviceCenters.filter(
        w => w.region === selectedRegion && w.district === selectedDistrict
    );

    const onSubmit = async (data) => {
        const riderData = {
            ...data,
            name: user?.displayName || "",
            email: user?.email || "",
            status: "pending",
            created_at: new Date().toISOString(),
        };


        try {
            const res = await axiosSecure.post('/riders', riderData);
            if (res.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Application Submitted!",
                    text: "Your application is pending approval."
                });
                reset();
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='bg-white my-7 p-6 md:p-14 rounded-3xl max-w-6xl mx-auto'>
            <h1 className='text-4xl font-extrabold text-[#03373D]'>Be a Rider</h1>
            <p className='text-[#606060] text-sm mt-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

            <div className='border my-10 text-[#0000001A]'></div>
            <h3 className='text-[#03373D] text-2xl font-bold mb-6'>Tell us about yourself</h3>

            <div className='flex flex-col-reverse md:flex-row gap-10'>
                {/* Left Form */}
                <div className='w-full md:w-1/2'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div>
                                <label className="label font-bold text-[#0F172A]">Your Name</label>
                                <input type="text" readOnly value={user?.displayName || ''} className="input input-bordered w-full text-[#94A3B8] bg-gray-100" />

                                <label className="label font-bold text-[#0F172A]">Your Email</label>
                                <input type="email" readOnly value={user?.email || ''} className="input input-bordered w-full text-[#94A3B8] bg-gray-100" />

                                <label className="label font-bold text-[#0F172A]">NID No</label>
                                <input type="text" className="input input-bordered w-full text-[#94A3B8]" placeholder="NID" {...register("nid", { required: true })} />
                                {errors.nid && <span className="text-red-500 text-sm">NID is required</span>}

                                <label className="label font-bold text-[#0F172A] mt-4">Bike Registration Number</label>
                                <input type="text" className="input input-bordered w-full text-[#94A3B8]" placeholder="e.g., DHA-12-1234" {...register("bike_registration", { required: true })} />
                                {errors.bike_registration && <span className="text-red-500 text-sm">Registration number is required</span>}

                            </div>
                            <div>
                                <label className="label font-bold text-[#0F172A]">Your Age</label>
                                <input type="number" className="input input-bordered w-full text-[#94A3B8]" placeholder="Your Age" {...register("age", { required: true, min: 18 })} />
                                {errors.age && <span className="text-red-500 text-sm">Must be 18 or older</span>}

                                <label className="label font-bold text-[#0F172A]">Your Region</label>
                                <select className="select select-bordered w-full" {...register("region", { required: true })} onChange={(e) => setSelectedRegion(e.target.value)}>
                                    <option value="">Select Region</option>
                                    {regions.map((region, i) => <option key={i} value={region}>{region}</option>)}
                                </select>
                                {errors.region && <span className="text-red-500 text-sm">Region is required</span>}

                                <label className="label font-bold text-[#0F172A]">Contact</label>
                                <input type="tel" className="input input-bordered w-full text-[#94A3B8]" placeholder="Contact" {...register("phone", { required: true })} />
                                {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}

                                <label className="label font-bold text-[#0F172A] mt-4">Bike Brand</label>
                                <input type="text" className="input input-bordered w-full text-[#94A3B8]" placeholder="e.g., Yamaha FZ" {...register("bike_brand", { required: true })} />
                                {errors.bike_brand && <span className="text-red-500 text-sm">Bike brand is required</span>}

                            </div>
                        </div>

                        <label className="label font-bold text-[#0F172A] mt-4">Select District</label>
                        <select className="select select-bordered w-full" {...register("district", { required: true })}>
                            <option value="">Select District</option>
                            {districts.map((district, i) => <option key={i} value={district}>{district}</option>)}
                        </select>
                        {errors.district && <span className="text-red-500 text-sm">District is required</span>}

                        <label className="label font-bold text-[#0F172A] mt-4">Which warehouse do you want to work in?</label>
                        <select className="select select-bordered w-full" {...register("warehouse", { required: true })}>
                            <option value="">Select Warehouse</option>
                            {availableWarehouses.map((wh, i) => (
                                <option key={i} value={wh.city}>{wh.city}</option>
                            ))}
                        </select>
                        {errors.warehouse && <span className="text-red-500 text-sm">Warehouse is required</span>}



                        <input type="submit" value="Submit Rider Application" className='btn btn-primary w-full mt-6' />
                    </form>
                </div>

                {/* Right Image */}
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <img src={agent} alt="Be a Rider" className='w-full max-w-sm' />
                </div>
            </div>
        </div>
    );
};

export default BeARider;
