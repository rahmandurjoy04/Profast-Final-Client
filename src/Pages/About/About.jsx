import React from 'react';

const About = () => {
    return (
        <div className='bg-white rounded-xl my-8 py-10 px-12'>
            <h1 className='text-3xl font-bold my-3 text-[#03373D]'>About Us</h1>
            <p className='text-[#606060]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
            <div className='bg-[#0000001A] border my-5 opacity-10'></div>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs ">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Story" />
                    <div className="tab-content text-sm text-[#606060] space-y-3 bg-base-100 p-10">
                        <p>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                        </p>
                        
                        
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Mission" defaultChecked />
                    <div className="tab-content text-sm text-[#606060]  bg-base-100 p-10">
                        <p>
                            Our mission is simple: to make parcel delivery fast, reliable, and stress-free for everyone. Whether you're sending documents, gifts, or essential goods, we are committed to providing a hassle-free experience backed by technology, transparency, and care. We aim to connect people and businesses by bridging distances with secure, timely deliveries, ensuring your parcels reach their destination with confidence.
                        </p>
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Success" />
                    <div className="tab-content text-sm text-[#606060] bg-base-100 p-10">
                        <p>
                            Our success is built on delivering promises—literally. Over the years, we have grown from a small local operation to a trusted name in parcel delivery, serving thousands of satisfied customers. With an unwavering focus on speed, reliability, and customer satisfaction, we have successfully handled countless deliveries across cities and regions. Each successful delivery motivates us to raise the bar and continuously improve our services.
                        </p>
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Team & Others" />
                    <div className="tab-content text-sm text-[#606060] bg-base-100 p-10">
                        <p>At ProFast, our strength lies in our people. From dedicated delivery agents to the support and operations team working behind the scenes, everyone plays a vital role in ensuring your parcels arrive safely and on time. We believe in building a culture of trust, responsibility, and efficiency. Alongside our core team, we partner with reliable logistics providers and technology experts to create a seamless delivery experience for individuals and businesses alike.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;