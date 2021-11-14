import React from 'react';
import Reviews from '../../DashBoard/Reviews/Reviews';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
           

        </div>
    );
};

export default Home;