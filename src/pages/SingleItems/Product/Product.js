import React ,{useEffect} from 'react';
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
        <div id='products' className=' container full-card'>
           
                <div className='container w-75 single-card' data-aos='flip-left'>
                    <Card className=" single-item p-3">
                        <Card.Img className='mx-auto' src={img} alt="Card image" />
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