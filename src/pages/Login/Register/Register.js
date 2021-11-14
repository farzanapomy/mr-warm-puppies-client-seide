import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/singup.jpg';
import { Alert, Container } from 'react-bootstrap';
import { Grid as div, TextField as input, Typography as h1, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import loader from '../../../images/loader.gif'

const Register = () => {
    const { user, registerUser, isLoading, error } = useAuth()
    const [displayData, setDisplayData] = useState({});


    const onchangeHandler = e => {
        const field = e.target.name;
        const value = e.target.value;
        const updateDisplayData = { ...displayData };
        updateDisplayData[field] = value;
        setDisplayData(updateDisplayData);

    }

    const handleRegister = (e) => {

        if (displayData.password !== displayData.password2) {
            alert('your password did not match');
            return;
        }
        registerUser(displayData.email, displayData.password)
        registerUser()
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div className='container'>
            <div>

                <div className='row'>
                    <div className='col-md-6'>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </div>
                    <div className='col-md-6'>
                        <h1>
                            Register
                        </h1>
                        {!isLoading && <form onSubmit={handleRegister}>
                            {/* <input
                                label="Your Name"
                                name="name"
                                onBlur={onchangeHandler}
                                */}
                            <input
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={onchangeHandler}
                            />
                            <input
                                type='password'
                                name="password"
                                onBlur={onchangeHandler}
                                label="Password"
                            />
                            <input
                                type='password'
                                name="password2"
                                label="Retype Password"
                                onBlur={onchangeHandler}

                            />
                            <br />
                            <Button type="submit" sx={{ width: '50%', m: 1 }} variant="contained">Register</Button>
                            <br />
                            <NavLink to='/login' style={{ textDecoration: "none", m: 5 }}>
                                <p variant="text"> Already registered ? please Login.</p>
                            </NavLink>
                        </form>}

                        {
                            isLoading && <img src={loader} alt="" />
                        }
                        {
                            user?.email && <Alert severity="success">User Created successfully</Alert>
                        }
                        {

                            error && <Alert severity="error">{error}</Alert>

                        }

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register;