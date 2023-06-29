import React from 'react';
import About from "../../img/about.png"
import "./style.scss"

const AboutUs = () => {
    return (
        <div id="aboutUs">
            <div className="container">
                <h1 className="about">About Us</h1>
                <div className="aboutUs">
                    <div className="aboutUs--photo">
                        <img className="aboutUs--photo__img" src={About} alt="trgyhjkml,"/>
                    </div>
                    <div className="aboutUs--desc">
                        <p>We believe that books have the power to change lives, and we're dedicated to helping our
                            customers find the perfect book for them. Whether you're looking for an escape from reality,
                            an educational read, or a book to inspire you, we've got you covered.</p>

                        <h3>Thank you for choosing to shop with us. We look forward to helping you discover your next
                            favorite book!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;