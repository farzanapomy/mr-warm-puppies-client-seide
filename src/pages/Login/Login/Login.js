import { CircularProgress, Grid, TextField, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.jpg'
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [logInData, setLogInData] = useState({});
    const { user, loginUser, isLoading, error } = useAuth()
    const onchangeHandler = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);
    }

    const location = useLocation()
    const history = useHistory();

    const handleLogInSubmit = e => {
        loginUser(logInData.email, logInData.password, location, history)
        const destination = location?.start?.from || "/allProducts/singleProduct";
        console.log(destination)
        history.replace(destination);
        e.preventDefault()
        e.target.reset()
    }

    return (
        <Container>
            <Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Please Login
                        </Typography>
                        <form onSubmit={handleLogInSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
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
                            <br />
                            <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Login</Button>
                            {
                                isLoading && <CircularProgress color="inherit" />
                            }
                            {
                                user?.email && <Alert severity="success">User Created successfully</Alert>

                            }
                            {
                                error && <Alert severity="error">{error}</Alert>

                            }

                            <NavLink to='/register' style={{ textDecoration: "none", display: 'block', margin: '5px' }}>
                                <p variant="text">  New User ? please Register.</p>
                            </NavLink>
                        </form>
                        <br />


                    </Grid>


                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;