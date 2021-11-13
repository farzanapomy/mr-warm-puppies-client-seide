import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/singup.jpg';
import { Alert, Container } from 'react-bootstrap';
import {  Grid, TextField, Typography,Button } from '@mui/material';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import loader from  '../../../images/loader.gif'

const Register = () => {
    const { user, registerUser, isLoading, error } = useAuth()
    const [displayData, setDisplayData] = useState({});

const location=useLocation();
const history=useHistory()

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
        <Container sx={{ my: 5 }}>
            <Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Register
                        </Typography>
                        {!isLoading && <form onSubmit={handleRegister}>
                            {/* <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={onchangeHandler}
                                variant="standard" /> */}
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={onchangeHandler}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type='password'
                                name="password"
                                onBlur={onchangeHandler}
                                label="Password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type='password'
                                name="password2"
                                label="Retype Password"
                                onBlur={onchangeHandler}
                                variant="standard" />
                            <br />
                            <Button type="submit" sx={{ width: '50%', m: 1}} variant="contained">Register</Button>
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

                    </Grid>


                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;