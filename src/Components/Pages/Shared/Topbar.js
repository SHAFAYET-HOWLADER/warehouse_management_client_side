import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../CustomLink/CustomLink';
import { signOut } from 'firebase/auth';
import logo from '../../../logo/book_logo.png';
import './Topbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Topbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
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
                            <CustomLink to="/inventory">Inventory</CustomLink>
                            <CustomLink to="/allBooks">All Books</CustomLink>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <CustomLink to="/addBook">Add Books</CustomLink>
                                    <CustomLink to="/manageInventories">Manage Book</CustomLink>
                                    <CustomLink to="/myBooks">My Books</CustomLink>
                                </>
                            }                          
                            {
                                user ?
                                    <button style={{
                                        border: 'none',
                                        borderRadius: '3px',
                                        fontFamily: "'Montserrat', sans - serif",
                                        backgroundColor: '#BEAEE2',
                                        fontWeight: '600',
                                        fontSize: '18px',
                                    }} onClick={logout} >SignOut </button>
                        : <CustomLink to="/login">Login </CustomLink>
                            }
                        <CustomLink to="/blog">
                            Blog
                        </CustomLink>
                        <CustomLink to="/about">
                            About
                        </CustomLink>
                        <CustomLink to="/contact">
                            Contact
                        </CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div >
    );
};

export default Topbar;