import React from "react";
import './style.scss';
import {BsFacebook, BsInstagram, BsTelegram, BsWhatsapp} from "react-icons/bs";

const Footer = () => {
    return (
        <div id = 'footer'>
            <div className="container">
                <div className="footer">
                    <div className="footer--block">
                        <div className="footer--block__sing">
                            <h1>Sign up for our newsletter</h1>
                            <p>Be the first to know about our special offers, news, and updates.</p>
                            <input type="text" placeholder="Email Address"/>
                            <button>Sign Up</button>
                        </div>
                        <div className="footer--block__read">
                            <h2>Read</h2>
                            <p>Book news</p>
                            <p>Ratings BookShop</p>
                            <p>Celebrity ratings</p>
                            <p>Bestsellers</p>
                        </div>
                        <div className="footer--block__create">
                            <h2>Create</h2>
                            <p>Book collections</p>
                            <p>Personal book profile</p>
                        </div>
                        <div className="footer--block__bookshop">
                            <h2>BookShop</h2>
                            <p>About us</p>
                            <p>Contacts</p>
                            <p>Site rules</p>
                            <p>Privacy agreement</p>
                        </div>
                    </div>
                    <div className="devider"></div>
                    <div className="footer--icons">
                        <div className="footer--icons__ai">
                            < BsFacebook className = "bs"/>
                        </div>
                        <div className="footer--icons__ai">
                            <BsInstagram  className = "bs"/>
                        </div>
                        <div className="footer--icons__ai">
                            <BsTelegram  className = "bs"/>
                        </div>
                        <div className="footer--icons__ai">
                            <BsWhatsapp  className = "bs"/>
                        </div>
                    </div>
                    <div className="devider"></div>
                    <p className='title'>© 2023 BookShop</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;