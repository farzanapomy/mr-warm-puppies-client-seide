import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Menubar.css'
import { Link } from 'react-router-dom';

const Menubar = () => {
    const { user, logOut } = useAuth();
    const element = <FontAwesomeIcon icon={faUser} />


    return (

        <>
            <Navbar bg="" className='mb-2 ' variant="light" sticky="right" collapseOnSelect expand="lg">
                <Container className=''>
                    <Navbar.Brand className='logo border-0 nav-img' href="/home#home">
                        <img className='bg-dark rounded ' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className='nav-text' as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='nav-text' as={HashLink} to="/allProducts">All Product</Nav.Link>
                        <Nav.Link className='nav-text' as={HashLink} to="/home#reviews">Reviews</Nav.Link>

                        {user.email && <Nav.Link className='nav-text' as={HashLink} to="/dashBoard">DashBoard</Nav.Link>}
                        <Nav.Link className='nav-text' as={HashLink} to="/home#about">About US</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Menubar;