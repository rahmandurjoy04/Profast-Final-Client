import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../../Shared/Footer/OurServices';
import ClientsLogosMarquee from '../ClientsLogosMarquee/ClientsLogosMarquee';
import OurFacilities from '../OurFacilities/OurFacilities';
import BeMerchant from '../BeMerchant/BeMerchant';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <ClientsLogosMarquee/>
            <OurFacilities/>
            <BeMerchant/>
        </div>
    );
};

export default Home;