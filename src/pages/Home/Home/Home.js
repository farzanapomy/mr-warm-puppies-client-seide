import React from 'react';
import Footer from '../Footer/Footer'
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Menubar from '../../Home/Menubar/Menubar'

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;