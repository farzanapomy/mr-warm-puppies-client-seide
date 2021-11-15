import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './AllProduct.css'

const AllProduct = ({ allProduct }) => {

    useEffect(() => {
        AOS.init()
    }, [])


    const { name, img, price, description, _id } = allProduct;
    return (
      
            <div id='products' className=' col-lg-4'>
                <div >
                    <div className='container w-75 single-card' data-aos='flip-left'>
                        <Card className=" single-item p-3">
                            <Card.Img className='mx-auto' src={img} alt="Card image" />
                            <Card.Title>{name}</Card.Title>
                            <Card.Text className="fs-2">Price :${price}</Card.Text>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Link to={`/products/${_id}`}>
                                <button className='btn btn-warning'>Purchase Now</button>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
       
    );
};

export default AllProduct;