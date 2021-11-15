import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'
import './PlaceOrder.css'
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState({});
    const { Id } = useParams()

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://powerful-ravine-08255.herokuapp.com/singleProduct/${Id}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [Id])

    const onSubmit = data => {
        data.status='Pending'
        axios.post('https://powerful-ravine-08255.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'WOW!',
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
          
            <div className="product-container container my-5">
                <h1 className='text-dark'>Here you Can place Your Order</h1>
                <div className="row">
                    <div className="col-md-5 border my-5 p-2 bg-dark ">
                        <img className='img-fluid w-50' src={products.img} alt="" />
                        <h3>Product Price {products.price}</h3>
                        <h2>{products?.name}</h2>
                        <p>{products?.description}</p>
                    </div>
                    <div className="col-md-5 my-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("text", { required: true })}
                                placeholder='Enter product name'
                                className='p-2 w-100 input-field'
                                defaultValue={products?.name}
                            />

                            <input
                                {...register("name", { required: true })}
                                placeholder='Enter Name'
                                className='p-2 w-100 input-field'
                                defaultValue={user.displayName}
                            />
                            <input
                                {...register("email", { required: true })}
                                placeholder='Enter email'
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
                                placeholder='Enter Phone Number'
                                className='p-2 w-100 input-field'
                            />
                            <input style={{backgroundColor:'tomato',padding:'10px 30px' ,margin:'10px',borderRadius:'10px',border:'none' }} type="submit" value="Order Now" />
                        </form>
                        <Link to='/home'>
                            <button style={{backgroundColor:'tomato',padding:'10px 30px' ,margin:'10px',borderRadius:'10px',border:'none' }}>Go home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;