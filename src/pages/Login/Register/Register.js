import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { user, registerUser } = useAuth()
    const element = <FontAwesomeIcon icon={faSmileBeam} />

    const { register, handleSubmit,watch,errors } = useForm();

    const onSubmit = data => {
        registerUser(data.name, data.email, data.password)
        if (data.password !== data.password2) {
            alert('your password did not match');
            return;
        }

        console.log(data)
    };


    return (
        <div>
            <h1>{element}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name",)}
                    placeholder="Enter your name"
                    name="name"
                    type="name"
                />

                <input
                    {...register("email",)}
                    placeholder='Your Email'
                    name="email"
                    type="email"
                />

                <input
                    type="password"
                    {...register("password",)}
                    placeholder='Your password'
                    name="password"

                />
                <input
                    type="password"
                    {...register("password2",)}
                    placeholder='Retype password'
                    name="password2"

                />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Register;