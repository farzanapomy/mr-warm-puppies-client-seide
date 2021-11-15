import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';

const ManageOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('');
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");


    useEffect(() => {
        fetch(`https://powerful-ravine-08255.herokuapp.com/managerOrder`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])

    const handleDelete = (id) => {
        const confirmation = window.confirm('Dear Customer , do you want to delete this order?')
        if (confirmation) {
            const url = `https://powerful-ravine-08255.herokuapp.com/myOrders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire(
                            'WOW!',
                            'You Successfully deleted your Order!',
                            'Thank You'
                        )
                        const rest = orders.filter(order => order._id !== id);
                        setOrders(rest);
                    }

                    console.log(data)
                })
            console.log(id)
        }
    }


    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        fetch(`https://powerful-ravine-08255.herokuapp.com/status/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };


    return (
        <div>
            <div className=''>
                <h2>Your total orders  {orders.length}</h2>
                <h1>All orders {orders.length}</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Approve</th>
                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody
                            key={order._id}
                        >
                            <tr>
                                <td>{index}</td>
                                <td>{order?.text}</td>
                                <td>{order?.name}</td>
                                <td>{order?.number}</td>
                                <td>{order?.status}</td>
                                <td>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <select
                                            onClick={() => handleOrderId(order?._id)}
                                            {...register("status")}
                                        >
                                            <option value={order?.status}>{order?.status}</option>
                                            <option value="approve">Shipped</option>
                                        </select>
                                        <input type="submit" />
                                    </form>
                                </td>
                                <button onClick={() => handleDelete(order._id)} className="btn bg-danger p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageOrder;