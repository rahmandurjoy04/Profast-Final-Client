import React from 'react';
import logo1 from '../../../assets/brands/amazon.png'
import logo2 from '../../../assets/brands/casio.png'
import logo3 from '../../../assets/brands/moonstar.png'
import logo4 from '../../../assets/brands/randstad.png'
import logo5 from '../../../assets/brands/start-people 1.png'
import logo6 from '../../../assets/brands/start.png'
import Marquee from 'react-fast-marquee';

const logos = [logo1,logo2,logo3,logo4,logo5,logo6]
const ClientsLogosMarquee = () => {
    return (
        <div className='min-w-sm'>
            <h2 className='text-2xl font-bold text-center mb-6'>Trusted by Leading Brands</h2>
            <Marquee pauseOnHover={50} gradient={false} className='my-5'>
                {
                    logos.map((logo,idx)=>(
                        <div key={idx} className='mx-6 flex items-center'>
                            <img src={logo} alt={`client logo ${idx+1}`}
                            className='h-6 object-contain'></img>
                        </div>
                    ))
                }
            </Marquee>
            
        </div>
    );
};

export default ClientsLogosMarquee;