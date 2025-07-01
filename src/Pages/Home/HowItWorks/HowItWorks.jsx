import React from 'react';
import { FaTruckPickup } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";
const HowItWorks = () => {
    const services = [
        {
            icon: <FaTruckPickup className="text-4xl text-primary mb-4" />,
            title: "Booking Pick & Drop",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            icon: <MdDeliveryDining className="text-4xl text-primary mb-4" />,
            title: "Cash On Delivery",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            icon: <FaTruckPickup className="text-4xl text-primary mb-4" />,
            title: "Delivery Hub",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            icon: <RiBuilding2Fill className="text-4xl text-primary mb-4" />,
            title: "Booking SME & Corporate",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
    ];


    return (
        <div className='my-6 min-w-sm px-4 md:px-0'>
            <h1 className='text-2xl font-bold mb-3 text-[#03373D]'>How it Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
                {
                    services.map((service,index) => (
                        <div key={index} className="card flex flex-col items-center bg-base-200 shadow-lg p-6 text-center hover:shadow-lg transition">
                            {service.icon}
                            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-500">{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HowItWorks;