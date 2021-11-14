import React from 'react';
import bg1 from '../../../images/bg1.jpg'
import bg2 from '../../../images/bg2.jpg'
import bg3 from '../../../images/bg3.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    return (
        <div className=''>
            <Carousel variant="dark" className=''>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid "
                        src={bg2}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1>Hello kitty lover 🐈</h1>
                        <h6>Your life is gonna be a lot more fun</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid "
                        src={bg1}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1>Hello kitty lover 🐈</h1>
                        <h6>Your life is gonna be a lot more fun</h6>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid "
                        src={bg3}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1>Hello kitty lover 🐈</h1>
                        <h6>Your life is gonna be a lot more fun</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;