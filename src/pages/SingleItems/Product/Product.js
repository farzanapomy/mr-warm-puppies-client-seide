import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css'
const Product = ({ product }) => {
    const { name, img, price, description } = product;

    return (
        <div>
            <div className='container w-75'>
                <Card className="bg-dark text-white single-item">
                    <Card.Img className='img-fluid  mx-auto' src={img} alt="Card image" />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>Price :${price}</Card.Text>
                    <button className='btn btn-warning'>Purchase Now</button>
                </Card>
            </div>
        </div>
    );
};

export default Product;