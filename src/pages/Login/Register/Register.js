import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/singup.jpg';
import { Alert, Button, Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import loader from '../../../images/loader.gif'
import './Register.css'
import Menubar from '../../Home/Menubar/Menubar';

const Register = () => {
    const { user, registerUser, isLoading, error } = useAuth()
    const [displayData, setDisplayData] = useState({});
    const history = useHistory()

    const onBlurHandler = e => {
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
        registerUser(displayData.email, displayData.password, displayData.name, history)
        registerUser()
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div className='container'>
            <Menubar/>
            <div>
                <div className='row register-form '>
                    <div className='col-md-6' >
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </div>
                    <div className='col-md-6 ms-end' >
                        <h1>
                            Register Please
                        </h1>
                        {!isLoading && <form onSubmit={handleRegister}>
                            <input
                                placeholder="Your Name"
                                type="name"
                                name="name"
                                onBlur={onBlurHandler}
                            />
                            <input
                                placeholder="Your Email"
                                name="email"
                                type="email"
                                onBlur={onBlurHandler}
                            />
                            <input
                                type='password'
                                name="password"
                                onBlur={onBlurHandler}
                                placeholder="Password"
                            />
                            <input
                                type='password'
                                name="password2"
                                placeholder="Retype Password"
                                onBlur={onBlurHandler}

                            />
                            <br />
                            <Button type="submit" style={{textAlign:"left"}}>Register</Button>
                            <br />
                            <NavLink to='/login' style={{ textDecoration: "none", m: 5 }}>
                                <p variant="text"> Already registered ? please Login.</p>
                            </NavLink>
                        </form>}

                        {
                            isLoading && <img src={loader} alt="" />
                        }
                        {
                            user?.email && <p severity="success">User Created successfully</p>
                        }
                        {

                            error && <p severity="error">{error}</p>

                        }

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register;