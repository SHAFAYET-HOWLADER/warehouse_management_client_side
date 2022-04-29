import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../CustomLink/CustomLink';
import logo from '../../../logo/book_logo.png';
import './Topbar.css'

const Topbar = () => {
    return (
        <div className='index'>
            <Navbar collapseOnSelect expand="lg" style={{
                backgroundColor: '#F7DBF0'
            }}>
                <Container>
                    <CustomLink to="/home">
                        <img style={{
                            height: '50px',
                            width: '50px'
                        }} src={logo} alt='logo_img' />
                    </CustomLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink  to="/inventory">Inventory</CustomLink>
                        </Nav>
                        <Nav>
                            <CustomLink  to="/login">Login </CustomLink>
                            <CustomLink  to="/blog">
                                Blog
                            </CustomLink>
                            <CustomLink  to="/about">
                                About
                            </CustomLink>
                            <CustomLink  to="/contact">
                                Contact
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Topbar;