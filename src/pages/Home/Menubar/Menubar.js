import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Menubar.css'

const Menubar = () => {
    const { user, logOut } = useAuth();
    const element = <FontAwesomeIcon icon={faUser} />


    return (

        <>
            <Navbar bg="dark" className='mb-2' variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='logo border-0 nav-img' href="/home#home">
                        <img className='my-2 bg-white rounded ' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className='nav-text' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='nav-text' as={HashLink} to="/home#products">Products</Nav.Link>
                        <Nav.Link className='nav-text' as={HashLink} to="/allproducts">Explore</Nav.Link>
                        <Nav.Link className='nav-text' as={HashLink} to="/home#reviews">Reviews</Nav.Link>

                        {user.email && <Nav.Link className='nav-text' as={HashLink} to="/dashBoard">DashBoard</Nav.Link>}
                        <Nav.Link className='nav-text' as={HashLink} to="/about">About US</Nav.Link>

                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>

                            {user.email &&
                                <h6>{element} <a href="#login"> {user?.email}</a>
                                </h6>
                            }
                        </Navbar.Text>
                        {/* <Navbar.Text>
                            <img className='w-50 rounded rounded-pill' src={user.photoURL} alt="" />
                        </Navbar.Text> */}
                        <Navbar.Collapse className='me-end'>
                            {
                                user.email ?
                                    <Button variant='primary' className='m-3' onClick={logOut}>Sign Out</Button>
                                    :
                                    <button className='nav-button nav-text'><Nav.Link as={HashLink} to="/login">Login </Nav.Link></button>
                            }
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Menubar;