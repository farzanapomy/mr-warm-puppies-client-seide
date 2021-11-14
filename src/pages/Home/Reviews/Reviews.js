import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faStar} from '@fortawesome/free-solid-svg-icons'
import { color } from '@mui/system';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const element1 = <FontAwesomeIcon icon={faStar} style={{color:"#FF9529"}}/>
    const element2 = <FontAwesomeIcon icon={faStar} style={{color:"#FFDF00"}}/>

    useEffect(() => {
        fetch('https://powerful-ravine-08255.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div id='reviews' className='container'>
            <h1>Client Testimonials</h1>
            <p>See what people are saying about us.</p>
            <div className="row ">
                {
                    reviews.map(review =>
                        <div className='col-md-4 '
                            key={review._id}
                        >
                            <img className='img-fluid w-50' src={review.image} alt="" />
                            <h2>{review.name}</h2>
                            <p>{review.email}</p>
                            <h2>{review.description}</h2>
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