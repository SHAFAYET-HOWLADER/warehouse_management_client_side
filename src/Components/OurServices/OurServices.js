import React from 'react';
import './OurServices.css'
import { FaArrowRight } from 'react-icons/fa';
import service_one from '../../banner_img/service_one.jpg';
import service_two from '../../banner_img/service_two.jpg';
import service_three from '../../banner_img/service_three.jpg';
import service_four from '../../banner_img/service_four.jpg';
const OurServices = () => {
    return (
        <section id="services">
            <div className='container'>
                <div className='services_title text-center'>
                    <h2>Services</h2>
                    <h3>We Provide</h3>
                    <p>
                        Through our experienced operations team we can handle various kind of
                        <br />
                        supply chain operations and services
                    </p>
                </div>
                <row>
                    <div className='service_items d-flex  justify-content-center'>
                        <div className='col-lg-3'>
                            <div className='services_img'>
                                <img className='img-fluid w-' src={service_one} alt='img' />
                                <div className='img_text text-center'>
                                    <h3>
                                        On-Demand Warehousing Space Services
                                    </h3>
                                    <button>
                                        More-Info
                                        &nbsp;
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='services_img'>
                                <img className='img-fluid w-100' src={service_two} alt='img' />
                                <div className='img_text text-center'>
                                    <h3>
                                        Kitting, Packing and Other Customized Operation
                                    </h3>
                                    <button>
                                        More-Info
                                        &nbsp;
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='services_img'>
                                <img className='img-fluid w-100' src={service_three} alt='img' />
                                <div className='img_text text-center'>
                                    <h3>
                                        Distribution and Reverse Logistics
                                    </h3>
                                    <button>
                                        More-Info
                                        &nbsp;
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='services_img'>
                                <img className='img-fluid w-100' src={service_four} alt='img' />
                                <div className='img_text text-center'>
                                    <h3>
                                        Value Added Services
                                    </h3>
                                    <button>
                                        More-Info
                                        &nbsp;
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </row>
            </div>
        </section>
    );
};

export default OurServices;