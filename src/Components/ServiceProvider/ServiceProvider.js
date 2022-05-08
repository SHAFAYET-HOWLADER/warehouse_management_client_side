import React from 'react';
import './ServiceProvider.css'
import section_img from '../../banner_img/section_img_one.jpg';
import { FaArrowRight } from 'react-icons/fa';
const ServiceProvider = () => {
    return (
        <section id="serviceProvider">
            <div className='container'>

                <div className='serviceProvider_parent'>

                    <div className='serviceProvider_left section_space'>
                        <h3>
                            At <span>Warehouse</span>, we provide a unique solution for warehousing space for business and consumers
                        </h3>
                        <p>
                            Warehousing is the process of storing physical inventory for sale or distribution.It ensures price stability and the mitigation of revenue losses. Seasonal demand for products enables warehouses to play a vital role in the supply chain. Warehouses are used by all different types of businesses that need to temporarily store products in bulk before either shipping them to other locations or individually to end consumers.
                        </p>
                        <button>
                            Read More
                            &nbsp;
                            <FaArrowRight />
                        </button>

                    </div>

                    <div className='serviceProvider_right section_space'>
                        <img className='img-fluid w-100' src={section_img} alt='img' />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServiceProvider;
