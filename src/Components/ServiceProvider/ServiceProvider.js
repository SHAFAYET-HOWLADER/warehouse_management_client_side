import React from 'react';
import './ServiceProvider.css'
import section_img from '../../banner_img/section_img_one.jpg';
import { FaArrowRight } from 'react-icons/fa';
const ServiceProvider = () => {
    return (
        <section id="serviceProvider">
            <div className='container'>
      
                   <div className='d-flex'>
                   <div className='col-lg-6'>
                       <div className='serviceProvider_left section_space'>
                       <h3>
                            At <span>Warehouse</span>, we provide a unique solution for warehousing space for business and consumers
                        </h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                        </p>
                        <button>
                           Read More
                           &nbsp;
                           <FaArrowRight/>
                        </button>
                       </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='serviceProvider_right section_space'>
                          <img className='img-fluid w-100' src={section_img} alt='img'/>
                        </div>
                    </div>
                   </div>
          
            </div>
        </section>
    );
};

export default ServiceProvider;
