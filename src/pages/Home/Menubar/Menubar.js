import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Menubar = () => {
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
                        <Nav.Link as={Link} to="/home#reviews">Reviews</Nav.Link>
                        <Nav.Link className='nav-menu' as={Link} to="/home#products">Features</Nav.Link>

                        <Navbar.Text>
                            Hello <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Menubar;