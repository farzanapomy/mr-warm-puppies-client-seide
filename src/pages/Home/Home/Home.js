import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>


        </div>
    );
};

export default Home;