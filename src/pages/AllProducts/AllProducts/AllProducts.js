import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = ({ product }) => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('https://powerful-ravine-08255.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2>this is AllProducts</h2>
            <div className=' products'>
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