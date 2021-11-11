import React from 'react';
import { Card, Col } from 'react-bootstrap';
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
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card>
            </div>
        </div>
    );
};

export default Product;