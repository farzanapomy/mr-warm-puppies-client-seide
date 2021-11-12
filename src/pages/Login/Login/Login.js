import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {user, loginUser } = useFirebase()
    const element = <FontAwesomeIcon icon={faSmileBeam} />
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        loginUser( data.email, data.password)
        

        console.log(data)
    };


    return (
        <div>
            <h1>{element}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              
                <input
                    {...register("email",)}
                    placeholder='Your Email'
                />

                <input type="password"
                    {...register("password",)}
                    placeholder='Your password'
                />
               
                <input type="submit" />
            </form>

        </div>
    );
};

export default Login;