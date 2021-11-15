import React, { useEffect, useState } from 'react';
import Menubar from '../../Home/Menubar/Menubar';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = ({ product }) => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('https://powerful-ravine-08255.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
        <Menubar></Menubar>
            <div className='row g-2 '>
                <h2 className='my-2 '>All Products</h2>
                {
                    products.map(allProduct => <AllProduct
                        key={allProduct._id}
                        allProduct={allProduct}
                    >
                    </AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;