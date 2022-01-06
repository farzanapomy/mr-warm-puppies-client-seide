import React from 'react';
import about from '../../../images/about.jpg'
import './About.css'
const About = () => {
    return (
        <div className='container' id='about'>
         
            <div className="row">
                <div className="col-md-6 about-img">
                    <img src={about} alt="" />
                </div>
                <div className="col-md-6 about-section">
                    <h2>About Us</h2>
                    <h1>
                        Find your desired breed of dog like labrador, rottweiler,doberman, puppies carrier.
                    </h1>
                    <p>
                        Mr-puppy.com is the most visited Pets And Animals website in for October 2021. The average amount of time that users spend on the website is 4 minutes, and they see, on average, 5.92 pages per visit. Pages per visit is a popular engagement metric <br /> that is calculated by dividing the total number of website views by the total number of visitors. The bounce rate for chewy.com is 46.40%, meaning that 46.40% of visitors leave the website after viewing just one page.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;