import React from 'react';
import './script.scss'
import BookShop from "../BookShop";
import Genres from "../Genres";
import NewBooks from "../NewBooks";
import Books from "../Books";
import AboutUs from "../AboutUs";

const Home = () => {
    return (
        <div className="home">
            <BookShop/>
            <Genres/>
            <NewBooks/>
            <Books/>
            <AboutUs/>
        </div>
    );
};

export default Home;