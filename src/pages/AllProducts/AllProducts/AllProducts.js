import React, { useEffect, useState } from 'react';

const AllProducts = ({ product }) => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2>this is AllProducts</h2>
            <div className=' products'>
                {
                    products.map(product => <div
                        key={product._id}>
                        <h2>{product.name}</h2>

                    </div>)
                }
            </div>
        </div>
    );
};

export default AllProducts;