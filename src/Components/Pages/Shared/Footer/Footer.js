import React from 'react';
import { FaArrowRight, MdFacebook} from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
    return (
        <section id='footer'>
            <div className='container'>
                <div className='footer_items'>
                    <div className='footer_text footer_space'>
                        <h3>About</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                            <br />
                            <br />
                            looked up one of the more obscure Latin words, consectetur. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                        </p>
                    </div>
                    <div className='footer_link footer_space'>
                        <h3>quick link</h3>
                        <ul>
                            <li> <FaArrowRight />  Home</li>
                            <li> <FaArrowRight />About</li>
                            <li> <FaArrowRight />Blog</li>
                            <li><FaArrowRight />Login</li>
                            <li><FaArrowRight />Contact</li>
                        </ul>
                    </div>
                    <div className='footer_info footer_space'>
                        <h3>Contact Info</h3>
                        <ul>
                            <li>   123, Lorem Ipsum, Dummy City, FL-12345 USA</li>
                            <li>+(1) 123-878-1649 | +(1) 123-878-1649</li>
                            <li>info@Warehouse.com | support@Warehouse.com</li>
                        </ul>
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
        </section>
    );
};

export default Footer;