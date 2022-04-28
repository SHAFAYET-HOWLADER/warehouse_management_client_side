import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../CustomLink/CustomLink';
import logo from '../../../logo/book_logo.png';

const Topbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  style={{
                backgroundColor: '#CDF0EA'
            }}>
                <Container>
                    <CustomLink to="/home">
                        <img style={{
                            height: '50px',
                            width: '50px'
                        }} src={logo} alt='logo_img'/>
                    </CustomLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <CustomLink to="/Features">Features</CustomLink>
                            <CustomLink to="/pricing">Pricing</CustomLink>                            
                        </Nav>
                        <Nav>
                            <CustomLink to="/more">More </CustomLink>
                            <CustomLink  to="/memes">
                                 memes
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Topbar;