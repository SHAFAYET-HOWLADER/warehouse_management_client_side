import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section id='footer' className='pt-5 pb-3'>
            <div className='container'>
                <div className='footer_items'>
                    <div className='footer_text footer_space'>
                        <h3>About</h3>
                        <p>
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            <br />
                            <br />
                            Ut Enim Ad Minim Veniam, Quis Exercitation Ullamco Laboris
                            Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum.
                        </p>
                    </div>
                    <div className='footer_link footer_space'>
                        <h3>Go</h3>
                    <p> <FaArrowRight />   &nbsp; Home</p>
                    <p> <FaArrowRight /> &nbsp; About</p>
                    <p> <FaArrowRight /> &nbsp; Blog</p>
                    <p><FaArrowRight /> &nbsp; Login</p>

                    </div>
                    <div className='footer_info footer_space'>
                        <h3>Contact Info</h3>

                        <p>123, Mo:pur, Dhaka,Bangladesh</p>
                        <p>+88 01890341583 | +88 01704830855</p>
                        <p>storedProduct@Warehouse.com</p>

                        <div className='social_icon'>

                        </div>
                    </div>
                    <div className='footer_subscribe footer_space'>
                        <h3>Subscribe</h3>
                        <p>Sign Up To Our Newsletter And Get The Latest Offers.</p>
                        <input type="email" placeholder='your email address' required />
                        <input type="submit" value='Got Notified' />
                    </div>
                </div>
            </div>
            <section id='copy'>
                <div className='container text-center'>
                    <small>All right reserved&copy;storedProduct@warehouse {year} </small>
                </div>
            </section>
        </section>
    );
};

export default Footer;