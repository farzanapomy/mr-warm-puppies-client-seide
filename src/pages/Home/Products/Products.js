import React, { useEffect, useState } from 'react';
import AllProducts from '../../AllProducts/AllProducts/AllProducts';
import Product from '../../SingleItems/Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('https://powerful-ravine-08255.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div id='products'>
            <h3>Our Product</h3>

            <div className=' products'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>




        </div>
    );
};

export default Products;

