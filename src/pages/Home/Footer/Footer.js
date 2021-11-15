import React from 'react';
import logo from '../../../images/logo.png'
import footer from '../../../images/footer.jpg'
const Footer = () => {

    const background = {
        background: `url(${footer})`,
        backgroundColor: 'rgba(45, 58, 74, 0.671)',
        backgroundBlendMode: 'darken,luminosity',
        marginTop: 200,

    }
    return (
        <div style={background}>

            <footer className="new_footer_area bg_color my-5 ">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                    <img src={logo} alt="" />
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new templates and extensions.!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate={true} _lpchecked="1">
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                                        <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft', textDecoration: 'none' }} >
                                    <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a style={{ color: 'black' }} href="#">Mr Worm Puppies</a></li>
                                        <li><a style={{ color: 'black' }} href="#">Android App</a></li>
                                        <li><a style={{ color: 'black' }} href="#">Desktop</a></li>
                                        <li><a style={{ color: 'black' }} href="#">Projects</a></li>
                                        <li><a style={{ color: 'black' }} href="#">My tasks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list" >
                                        <li><a href="#" style={{ color: 'black' }}>FAQ</a></li>
                                        <li><a href="#" style={{ color: 'black' }}>Term &amp; conditions</a></li>
                                        <li><a href="#" style={{ color: 'black' }}>Reporting</a></li>
                                        <li><a href="#" style={{ color: 'black' }}>Documentation</a></li>
                                        <li><a href="#" style={{ color: 'black' }}>Support Policy</a></li>
                                        <li><a href="#" style={{ color: 'black' }}>Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Social Contact</h3>
                                    <div className="f_social_icon " >
                                        <a href="#" style={{ color: 'black' }} className=" p-3 fab fa-facebook"></a>
                                        <a href="#" style={{ color: 'black' }} className=" p-3 fab fa-twitter"></a>
                                        <a href="#" style={{ color: 'black' }} className=" p-3 fab fa-linkedin"></a>
                                        <a href="#" style={{ color: 'black' }} className=" p-3 fab fa-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom ">
                    <div className="">
                        <div className=" mt-3 my-2 bg-dark text-light p-3">
                            <p className="mb-0  f_400 ">© mr.puppy.com 2021 All Rights Reserved.</p>

                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;