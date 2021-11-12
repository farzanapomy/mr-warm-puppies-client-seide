import React from 'react';
import { Link } from 'react-router-dom';
import not from '../../images/404.gif'


const NotFound = () => {
    return (
        <div>
            <img className='w-50' src={not} alt="" />
            <br />
            <Link to='/home'>
                <button className='btn btn-warning '>Go back</button>
            </Link>
        </div>
    );
};

export default NotFound;