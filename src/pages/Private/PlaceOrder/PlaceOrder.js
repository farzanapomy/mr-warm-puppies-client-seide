import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState({});
    const { Id } = useParams()

    const { register, handleSubmit,reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${Id}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const onSubmit = data => {

        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You Successfully added your Order!',
                        'Thank You'
                    )
                    reset()
                }
                console.log(res)
            })
        console.log(data)
    }



    return (
        <div>
            <div className="product-container container">
                <h1 className='text-dark'>Here you Can place Your Order</h1>
                <div className="row">
                    <div className="col-lg-5 m-5 border  p-4 bg-dark ">
                        <img className='img-fluid w-50' src={products.img} alt="" />
                        <h3>Product Price {products.price}</h3>
                        <h2>{products?.name}</h2>
                        <p>{products?.description}</p>
                    </div>
                    <div className="col-lg-5 pt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("text", { required: true })}
                                placeholder='Enter product name'
                                className='p-2 w-100 input-field'
                                defaultValue={products?.name}
                            />

                            <input
                                {...register("email", { required: true })}
                                placeholder='Enter product name'
                                className='p-2 w-100 input-field'
                                defaultValue={user.email}
                            />
                           
                           
                            <input
                                {...register("address", { required: true })}
                                placeholder='Enter Your Address'
                                className='p-2 w-100 input-field'
                            />
                            <input
                                {...register("number", { required: true })}
                                className='p-2 w-100 input-field'
                                defaultValue={products?.price}
                            />

                            <input
                                {...register("number", { required: true })}
                                placeholder='Enter Phone Number'
                                className='p-2 w-100 input-field'
                            />
                            <input className='btn btn-warning' type="submit" value="Order Now" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;