import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://powerful-ravine-08255.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div id='reviews' className='container'>
            <h2>Our reviews {reviews.length}</h2>
            <div className="row">
                {
                    reviews.map(review =>
                        <div className='col-md-4'
                                key={review._id}
                            >
                            <img className='img-fluid w-50' src={review.image} alt="" />
                            <h2>{review.name}</h2>
                            <p>{review.email}</p>
                            <h2>{review.description}</h2>
                            <h2>{review.ratting}</h2>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Reviews;