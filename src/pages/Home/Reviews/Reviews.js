import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons'
import { Image } from 'react-bootstrap';
import './Reviews.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const element1 = <FontAwesomeIcon icon={faStar} style={{ color: "#FF9529" }} />
    const element2 = <FontAwesomeIcon icon={faStar} style={{ color: "#FFDF00" }} />

    useEffect(() => {
        AOS.init()
    }, [])


    useEffect(() => {
        fetch('https://powerful-ravine-08255.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div id='reviews' className='container my-5' data-aos='fade-up'>
            <div className='mb-3'>
                <h1>Client Testimonials</h1>
                <p>See what people are saying about us.</p>
            </div>
            <div className="row container">
                {
                    reviews.map(review =>
                        <div className=' col-md-3 m-2 border p-2 review-item'
                            key={review._id}
                        >
                            <Image src={review.image} className='img-fluid w-25 p-2 ' roundedCircle />

                            <h6>{review.name}</h6>
                            <p>{review.text}</p>
                            <p>{review.description}</p>
                            <Rating readonly
                                initialRating={review.ratting}
                                fullSymbol={element1}
                                emptySymbol={element2}
                            ></Rating>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Reviews;