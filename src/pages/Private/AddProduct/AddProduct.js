import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        axios.post('https://powerful-ravine-08255.herokuapp.com/products', data)
            .then(res => {

                if (data.insertedId) {
                    alert('Your Data Successfully added')
                    return;
                }
                console.log(res)
            })
        console.log(data)
    }



    return (
        <>
            <div className='w-75 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        placeholder='Enter product name'
                        className='p-2 w-100 input-field'
                    />

                    <input
                        {...register("name", { required: true })}
                        placeholder='Enter product name'
                        className='p-2 w-100 input-field'

                    />

                    <input
                        {...register("image", { required: true })}
                        placeholder='enter img link'
                        className='p-2 w-100 input-field'
                    />

                    <input
                        {...register("number", { required: true })}
                        placeholder='enter price'
                        className='p-2 w-100 input-field'
                    />

                    <input className='btn btn-warning' type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddProduct;