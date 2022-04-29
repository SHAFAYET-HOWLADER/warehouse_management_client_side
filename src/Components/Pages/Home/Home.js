import React from 'react';
import OurServices from '../../OurServices/OurServices';
import ServiceProvider from '../../ServiceProvider/ServiceProvider';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Banner/>
            <ServiceProvider/>
            <OurServices/>
        </div>
    );
};

export default Home;