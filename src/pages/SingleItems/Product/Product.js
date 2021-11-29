import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Product = ({ product }) => {
    const { name, img, price, description, _id } = product;


    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div id='products' className=' col-md-4 p-1'>
            <Card className='p-3'>
                <Card className="mx-auto  single-item g-5" data-aos='flip-left'>
                    <Card.Img className='mx-auto' src={img} alt="Card image" />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="fs-2">Price :${price}</Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/products/${_id}`} >
                        <button className='btn btn-warning m-3'>Purchase Now</button>
                    </Link>
                </Card>

            </Card>
        </div>
    );
};

export default Product;