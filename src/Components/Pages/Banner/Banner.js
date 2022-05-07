import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner_one from '../../../banner_img/banner_one.jpg';
import banner_two from '../../../banner_img/banner_two.jpg';
import banner_four from '../../../banner_img/banner_four.jpg';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <section id="banner">
            <div className=''>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            style={{
                                height: '600px',
                                widthL: '100%',
                                objectFit: 'cover'
                            }}
                            className="d-block w-100"
                            src={banner_one}
                            alt="First slide"
                        />
                        <Carousel.Caption className='banner_text'>
                            <h2>Book Lover</h2>
                            <h3>Books you can trust</h3>
                            <p>Most famous books are available in our space</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{
                                height: '600px',
                                widthL: '100%',
                                objectFit: 'cover'
                            }}
                            className="d-block w-100"
                            src={banner_two}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='banner_text'>
                            <h2>Book Lover</h2>
                            <h3>Author and imagination you find entertainment</h3>
                            <p>All you needs we store in our warehouse</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{
                                height: '600px',
                                widthL: '100%',
                                objectFit: 'cover'
                            }}
                            className="d-block w-100"
                            src={banner_four}
                            alt="Third slide"
                        />

                        <Carousel.Caption className='banner_text'>
                            <h2>Book Lover</h2>
                            <h3>We maintain clean environment to store our books</h3>
                            <p>
                                For long lasting self life we update our warehouse
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default Banner;