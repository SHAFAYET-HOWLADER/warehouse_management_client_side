import React from 'react';
import Inventory from '../../../Inventory/Inventory';
import OurServices from '../../OurServices/OurServices';
import ServiceProvider from '../../ServiceProvider/ServiceProvider';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Banner/>
            <ServiceProvider/>
            <OurServices/>
            <Inventory/>
        </div>
    );
};

export default Home;