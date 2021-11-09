import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h3>this is Products {products.length}</h3>
            {
                products.map(product=> <div>{product.name} </div> )
            }
        </div>
    );
};

export default Products;