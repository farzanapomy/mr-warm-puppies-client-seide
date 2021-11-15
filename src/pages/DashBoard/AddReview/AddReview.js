import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit,reset } = useForm();

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
                reset()
                console.log(res)
            })
        console.log(data)
    }




    return (
        <div className='container my-2 p-3 '>
            <h2>Here your add your review about our product and website</h2>
            <div className='5 form-style'>
                <form onSubmit={handleSubmit(onSubmit)} className=' my-2' >
                    <input
                        required
                        {...register("name",)}
                        placeholder='Enter your name'
                        className='border-0  px-5 py-2'
                    />
                    <br />
                    <input
                        {...register("text",)}
                        required
                        placeholder='Enter Product Name'
                        className='border-0  px-5 py-2'
                    />
                    <br />
                    <input
                        {...register("image",)}
                        required
                        placeholder='Enter your img link'
                        className='border-0  px-5 py-2'

                    />
                    <br />
                    <textarea
                        {...register("description",)}
                        required
                        placeholder='Enter your Opinion'
                        className='border-0  px-5 py-2'
                    />
                    <br />
                    <input type="number"
                        required
                        placeholder='Enter rating'
                        {...register("ratting", { min: 0, max: 5 })}
                        className='border-0  px-5'
                    />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );

};

export default AddReview;