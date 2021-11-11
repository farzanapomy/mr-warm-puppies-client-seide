import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';

const Login = () => {
    const element = <FontAwesomeIcon icon={faSmileBeam} />
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <h1>{element}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name",)}
                    placeholder="Enter your name"
                />

                <input
                    {...register("email",)}
                    placeholder='Your Email'
                />

                <input type="password"
                    {...register("password",)}
                    placeholder='Your password'
                />
                <input type="password"
                    {...register("password",)}
                    placeholder='Retype password'
                />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Login;