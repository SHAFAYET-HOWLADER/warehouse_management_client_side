import React from 'react';
import { FaArrowRight, FaFacebookF, FaLinkedin, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
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
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
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

                        <div className='social_icon pt-2'>
                            <a target='_blank' href="https://www.facebook.com"><FaFacebookF /></a>
                            <a target='_blank' href="https://www.linkedin.com"> <FaLinkedin /></a>
                            <a target='_blank' href="https://www.instagram.com"><FaInstagram /></a>
                            <a target='_blank' href="https://www.twitter.com"> <FaTwitterSquare /> </a>
                        </div>
                    </div>
                    <div className='footer_subscribe footer_space inputField'>
                        <h3>Subscribe</h3>
                        <p>Sign Up To Our Newsletter And Get The Latest Offers.</p>
                        <form>
                            <input type="email" placeholder='Your email address' required />
                            <input style={{
                                fontSize: '18px',
                                color: '#fff'
                            }} type="submit" value='Got Notified' />
                        </form>
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