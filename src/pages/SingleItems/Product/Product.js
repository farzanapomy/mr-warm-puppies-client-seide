import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { name, img, price, description,_id } = product;

    return (
        <div id='products'>
            <div className='container w-75'>
                <Card className="bg-dark text-white single-item">
                    <Card.Img className='img-fluid  mx-auto' src={img} alt="Card image" />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>Price :${price}</Card.Text>
                   <Link to={`/products/${_id}`}>
                    <button className='btn btn-warning'>Purchase Now</button>
                   </Link>
                </Card>
            </div>
        </div>
    );
};

export default Product;