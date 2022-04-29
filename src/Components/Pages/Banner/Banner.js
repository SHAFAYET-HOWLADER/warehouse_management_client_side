import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner_one from '../../../banner_img/banner_one.jpg';
import banner_two from '../../../banner_img/banner_two.jpg';
// import banner_three from '../../../banner_img/banner_three.jpg';
import banner_four from '../../../banner_img/banner_four.jpg';

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
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default Banner;