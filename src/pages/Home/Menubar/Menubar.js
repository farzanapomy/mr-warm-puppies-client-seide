import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Menubar = () => {
    const {user}=useAuth();
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='bg-light rounder w-50' src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#products">Products</Nav.Link>
                        <Nav.Link className='nav-menu' as={Link} to="/allProducts">Explore Products</Nav.Link>
                        <Nav.Link as={Link} to="/home#reviews">Reviews</Nav.Link>
                       {user ?
                        <Nav.Link className='nav-menu' as={Link} to="/login">Sign Out</Nav.Link>
                       : <Nav.Link className='nav-menu' as={Link} to="/login">Sign in</Nav.Link>}

                      {user.email && <Navbar.Text>
                            Hello <a href="#login">{user.displayName}</a>
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Menubar;