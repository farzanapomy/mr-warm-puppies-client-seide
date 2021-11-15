import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManagerProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-ravine-08255.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = (id) => {
        const confirmation = window.confirm('Dear Customer , do you want to delete this order?')
        if (confirmation) {
            const url = `https://powerful-ravine-08255.herokuapp.com/products/${id}`;
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
                        const rest = products.filter(order => order._id !== id);
                        setProducts(rest);
                    }

                    console.log(data)
                })
            console.log(id)
        }
    }


    return (
        <div>
            <h2>Your total orders  {products.length}</h2>
          

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {products?.map((product, index) => (
                    <tbody
                        key={product._id}
                    >
                        <tr>
                            <td>{index}</td>
                            <td>{product?.text}</td>
                            <td>{product?.name}</td>
                            <td>{product?.number}</td>
                            <td>{product?.status}</td>

                            <button onClick={() => handleDelete(product._id)} className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>

    );
};

export default ManagerProduct;