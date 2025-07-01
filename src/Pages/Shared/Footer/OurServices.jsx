import React from "react";
import servicePhoto from '../../../assets/service.png'

const OurServices = () => {
    const services = [
        {
            title: "Express & Standard Delivery",
            description:
                "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
        },
        {
            title: "Nationwide Delivery",
            description:
                "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
        },
        {
            title: "Fulfillment Solution",
            description:
                "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        },
        {
            title: "Cash on Home Delivery",
            description:
                "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        },
        {
            title: "Corporate Service / Contract In Logistics",
            description:
                "Customized corporate services which includes warehouse and inventory management support.",
        },
        {
            title: "Parcel Return",
            description:
                "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        },
    ];

    return (
        <div className="bg-[#063940] text-center text-base-100 py-12 px-4 md:px-12 my-10 md:rounded-lg min-w-sm">
            <h2 className="text-3xl font-bold mb-2">Our Services</h2>
            <p className="mb-10 max-w-2xl mx-auto text-gray-300">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className={`card p-6 shadow-md hover:bg-lime-300 hover:text-gray-800 bg-base-100 text-neutral hover:shadow-lg transition`}
                    >
                        <div className="flex justify-center mb-4">
                            <div
                                className="h-12 w-12 rounded-full flex justify-center items-center"
                                style={{
                                    background: "linear-gradient(180deg, #07B2CD 0%, #06AEC9 38%, #04A3BD 76%, #0199B1 100%)",
                                }}
                            >

                                <img
                                    src={servicePhoto}
                                    alt="Service Icon"
                                />
                            </div>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
