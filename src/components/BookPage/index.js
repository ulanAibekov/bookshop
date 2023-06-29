import React, {useEffect, useState} from 'react';
import './style.scss'
import {Link, NavLink} from "react-router-dom";
import {HiOutlineArrowSmDown} from "react-icons/hi";
import axios from "axios";
import Checkbox from '../../img/Checkbox Off.png'
import Blue from '../../img/Blueue.png'
import Slider from "react-slick";
import {GoSettings} from "react-icons/go";

const API_KEY = 'AIzaSyD1z1aKy9_iFzifYabztZePoe4Z-OsPU0Q'

const BooksPage = () => {
    const [books, setBooks] = useState([])
    const [imageSrc, setImageSrc] = useState({Checkbox});


    function handleClick() {
        setImageSrc({Blue});
    }

    const [sum,setSum] = useState('popular')
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${sum}&search+terms&startIndex=0&maxResults=10&key=${API_KEY}`)
            .then(response => {
                setBooks(response.data.items);
            })
            .catch(error => console.error(error));
    }, [sum]);


    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggleBlock = () => {
        setIsOpen(!isOpen);
    };
    const closeBlock = () => {
        setIsOpen(false);
    };

    const getBook = (e) => {
        setSum(e.target.value);
    };
    return (
        <div className='container'>
            <div className='booksPage'>
                <div className="booksPage__first">
                    <h1>All Books</h1>
                    <p>Here you can find all the books you need</p>
                </div>
                <div className="booksPage__second">
                    <div className="booksPage__second--main">
                        <select value={sum} className='select' onChange={getBook}>
                            <option value='pop'>Popular</option>
                            <option value='чингиз'>Чингиз Айтматов</option>
                            <option value="art">Art</option>
                            <option value="biography">Biography</option>
                            <option value="fiction">Fiction</option>
                            <option value="history">History</option>
                            <option value="humor">Humor</option>
                            <option value="poetry">Poetry</option>
                            <option value="science">Science</option>
                            <option value="self-help">Self-Help</option>
                            <option value="travel">Travel</option>
                        </select>
                        <button onClick={() => {
                            toggleBlock()
                        }} className='booksPage__second--main__set'><GoSettings/></button>
                    </div>
                </div>
                <div className="booksPage__third">
                    <div className="booksPage__third--main">
                        <h2>Filters</h2>
                        <a className=''>Clear filters</a>
                    </div>

                    <h3 className='booksPage__genres'>Genres</h3>

                </div>
                <div className="booksPage__fourth">
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Autographed Books</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Sci-Fi</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>For kids</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>For teenagers</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Finance</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Detective</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Romantic</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Psychology</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Self-Improvement</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Educational</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Literature</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <input type="checkbox"/>
                        <h3>Religion</h3>
                    </div>

                </div>
                <div className="booksPage__fifth">
                        {books.map(book => (
                            <div key={book.id}>
                                <Link to={`/DetailPage/${book.id}`}>
                                    <img
                                        src={
                                            book.volumeInfo.imageLinks
                                                ? book.volumeInfo.imageLinks.thumbnail
                                                : 'https://via.placeholder.com/150x200?text=No+Image'
                                        }
                                        alt={book.volumeInfo.title}
                                    />
                                </Link>
                                <h2>{book.volumeInfo.title}</h2>
                                <p>{book.volumeInfo.authors}</p>
                            </div>
                        ))}

                </div>

                <div className="booksPage__filters">
                    <div className={`block ${isOpen ? "open" : ""}`}>
                        <strong className="close" onClick={closeBlock}>x</strong>
                        <div className="booksPage__filters--title">
                            <h2>Filters</h2>
                            <a href="">Clear filters</a>

                        </div>

                        <h3 className='booksPage__filters--gen'>Genres</h3>
                        <div className="">
                            <Slider {...settings}>

                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Autographed Books</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Sci-Fi</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>For kids</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>For teenagers</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Finance</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Detective</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Romantic</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Psychology</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Self-Improvement</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Educational</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Literature</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="checkbox"/>
                                    <h3>Religion</h3>
                                </div>

                            </Slider>
                        </div>

                        <button className='booksPage__filters--btn'>Apply Filter</button>

                    </div>

                </div>
            </div>
        </div>
    );
};


export default BooksPage;