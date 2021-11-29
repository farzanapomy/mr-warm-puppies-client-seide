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
            <Navbar bg="" className='mb-2 ' variant="light" sticky="right" collapseOnSelect expand="lg">
                <Container className=''>
                    <Navbar.Brand className='logo border-0 nav-img' href="/home#home">
                        <img className='bg-dark rounded ' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
<summary></summary>
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className='nav-text' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='nav-text' as={HashLink} to="/allProducts">All Product</Nav.Link>
                        <Nav.Link className='nav-text' as={HashLink} to="/home#reviews">Reviews</Nav.Link>

                        {user.email && <Nav.Link className='nav-text' as={HashLink} to="/dashBoard">DashBoard</Nav.Link>}
                        <Nav.Link className='nav-text' as={HashLink} to="/home#about">About US</Nav.Link>

                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>

                            {user.email &&
                                <h6>{element} <a href="#login"> Hello {user?.displayName}</a>
                                </h6>
                            }
                        </Navbar.Text>

                        <Navbar.Collapse className='justify-content-end'>
                            {
                                user.email ?
                                    <Button variant='primary' className='m-3' onClick={logOut}>
                                        Sign Out
                                    </Button>
                                    :
                                    <button className='border-0 rounded  '>
                                        <Nav.Link as={HashLink} to="/login">
                                            {element}
                                        </Nav.Link>
                                    </button>
                            }
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Menubar;