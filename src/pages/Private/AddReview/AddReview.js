import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const [reviews, setReviews] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
            
        console.log(data)};


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                required
                {...register("name",)}
                placeholder='Enter your name'
            />

            <input
                {...register("email",)}
                required
                placeholder='Enter your email'
            />

            <textarea
                {...register("email",)}
                required
                placeholder='Enter your email'
            />

            <input type="number"
                required
                {...register("ratting", {
                    minLength: 1, maxLength: 5
                })} />

            <input type="submit" />
        </form>
    );
    //ratting max 5 thik korte hobe
};

export default AddReview;