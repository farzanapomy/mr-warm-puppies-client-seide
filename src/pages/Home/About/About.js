import React from 'react';
import about from '../../../images/about.jpg'
const About = () => {
    return (
        <div className='container' id='about'>
            <div className="row">
                <div className="com-md-6">
                    <img src={about} alt="" />
                </div>
                <div className="com-md-6">

                    <p>
                        Mr-puppy.com is the most visited Pets And Animals website in for October 2021. The average amount of time that users spend on the website is 4 minutes, and they see, on average, 5.92 pages per visit. Pages per visit is a popular engagement metric that is calculated by dividing the total number of website views by the total number of visitors. The bounce rate for chewy.com is 46.40%, meaning that 46.40% of visitors leave the website after viewing just one page.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;