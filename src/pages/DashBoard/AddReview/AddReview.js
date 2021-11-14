import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        axios.post('https://powerful-ravine-08255.herokuapp.com/reviews', data)
            .then(res => {

                if (res.data.insertedId) {
                    Swal.fire(
                        'WOW!',
                        'You Successfully added your precious review!',
                        'Thank You'
                    )
                    return;
                }
                console.log(res)
            })
        console.log(data)
    }




    return (
        <div className='container form-style '>

            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto' >
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
                <input
                    {...register("image",)}
                    required
                    placeholder='Enter your img link'
                />

                <textarea
                    {...register("description",)}
                    required
                    placeholder='Enter your email'
                />

                <input type="number"
                    required
                    {...register("ratting", )} 
                    
                    />

                <input type="submit" />
            </form>
        </div>
    );
    //ratting max 5 thik korte hobe
};

export default AddReview;