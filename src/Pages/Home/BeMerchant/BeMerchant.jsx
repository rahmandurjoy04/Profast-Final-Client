import React from 'react';
import location from '../../../assets/location-merchant.png'

const BeMerchant = () => {
    return (
        <div 
        data-aos='flip-up'
        className="bg-[#03373D] bg-no-repeat bg-[url('assets/be-a-merchant-bg.png')] text-white mb-8 min-w-sm shadow-xl rounded-xl">
            <div className="hero-content p-18 flex-col lg:flex-row-reverse">
                <img
                src={location}
                    className="w-full"
                />
                <div>
                    <h1 className="text-3xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div className='space-x-5'>
                        <button className="btn bg-[#CAEB66] rounded-3xl">Become a Merchant</button>
                        <button className="btn text-[#CAEB66] bg-[#03373D] border-[#CAEB66] rounded-3xl">Earn with Profast Courier</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;