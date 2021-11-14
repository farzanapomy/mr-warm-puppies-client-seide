import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://powerful-ravine-08255.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])

    return (
        <div>
            <h2>Your total orders {orders.length}</h2>

            {
                orders.map(order =>
                    <div className='order-container' 
                    key={order._id}>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={order?.img} alt="" />
                                <h2>{order.email}</h2>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyOrders;