import React from 'react';
import liveTracking from '../../../assets/live-tracking.png'
import safeDelivery from '../../../assets/safe-delivery.png'
import callSuport from '../../../assets/safe-delivery.png'
const OurFacilities = () => {
    const facilities = [
        {
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            image: liveTracking,
        },
        {
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: safeDelivery,
        },
        {
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            image: callSuport,
        },
    ];

    return (
        <section className="py-8 min-w-sm">
            <div className='border border-dashed mb-7'></div>
            <div className="flex flex-col gap-8">
                {facilities.map((facility, index) => (
                    <div
                        key={index}
                        className="bg-white mx-4 md:mx-0 flex items-center rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className='w-2/12 h-full'>
                            <img
                                src={facility.image}
                                alt={facility.title}
                                className="w-full object-cover rounded"
                            />
                        </div>
                        <div className='border border-dashed mx-3 h-44 md:h-34'></div>
                        <div className='w-10/12'>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">{facility.title}</h3>
                            <p className="text-gray-600 mb-2">{facility.description}</p>
                        </div>

                    </div>
                ))}
            </div>
            <div className='border border-dashed mt-7'></div>

        </section>
    );
};

export default OurFacilities;