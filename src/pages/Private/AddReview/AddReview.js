import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const AddReview = () => {
   
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        axios.post('https://powerful-ravine-08255.herokuapp.com/reviews', data)
            .then(res => {
                if (data.insertedId) {
                    Swal.fire(
                        'WOW!',
                        'You Successfully Added your valuable Review!',
                        'Thank You'
                    )
                    return;
                }
                console.log(res)
            })

        console.log(data)
    };


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