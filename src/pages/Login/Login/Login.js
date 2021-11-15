import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.jpg'
import useAuth from '../../../hooks/useAuth';
import Menubar from '../../Home/Menubar/Menubar';
import Footer from '../../Home/Footer/Footer';
import loder from '../../../images/loader.gif'



const Login = () => {
    const [logInData, setLogInData] = useState({});
    const { user, loginUser, isLoading, error } = useAuth()
    const onBlurHandler = e => {
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

        e.preventDefault()
        e.target.reset()
    }

    return (
        <div>
            <Menubar></Menubar>
            <div>
                <div className='container row register-form mx-auto'  >
                    <div className='col-md-6'>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </div>
                    <div className='col-md-6 mx-auto'>
                        <h1>
                            Please Login
                        </h1>
                        <form onSubmit={handleLogInSubmit}>
                            <input

                                label="Your Email"
                                name="email"
                                onBlur={onBlurHandler}
                            />
                            <input

                                type='password'
                                name="password"
                                onBlur={onBlurHandler}
                                label="Password"
                            />
                            <br />
                            <Button type="submit" style={{ backgroundColor: 'tomato', padding: '10px 30px', margin: '10px', borderRadius: '10px', border: 'none' }}>Login</Button>
                            {
                                isLoading && <img src={loder} alt="" />
                            }
                            {
                                user?.email && <p severity="success">User Created successfully</p>

                            }
                            {
                                error && <p severity="error">{error}</p>

                            }

                            <NavLink to='/register' style={{ textDecoration: "none", display: 'block', margin: '5px' }}>
                                <p variant="text">  New User ? please Register.</p>
                            </NavLink>
                        </form>
                        <br />


                    </div>


                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;