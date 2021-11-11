import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const [addServices, setAddServices] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      
        axios.post('http://localhost:5000/products',data)
        .then(res=>
            console.log(res)
        )
        console.log(data)
    }

      

        return (
            <>
                <div className='w-75 mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name", { required: true })}
                            placeholder='Your name'
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