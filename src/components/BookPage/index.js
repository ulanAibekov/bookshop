import React, { useEffect, useState } from 'react';
import './index.scss'
import { Link, NavLink } from "react-router-dom";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import axios from "axios";
import Checkbox from '../../img/Checkbox Off.png'
import Blue from '../../img/Blueue.png'
import Slider from "react-slick";
import { GoSettings } from "react-icons/go";
import {TiDelete} from "react-icons/ti";

const API_KEY = 'AIzaSyD1z1aKy9_iFzifYabztZePoe4Z-OsPU0Q'

const BooksPage = () => {
    const [books, setBooks] = useState([])
    const [imageSrc, setImageSrc] = useState({ Checkbox });
    const [click, setClick] = useState(false)
    const [sum, setSum] = useState('popular')
    const [isOpen, setIsOpen] = useState(false); // Состояние для отображения блока

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${sum}&search+terms&startIndex=0&maxResults=10&key=${API_KEY}`)
            .then(response => {
                setBooks(response.data.items);
            })
            .catch(error => console.error(error));
    }, [sum]);

    function handleClick() {
        setImageSrc({ Blue });
    }

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
                            <option value='pop'>Sort by Popular</option>
                            <option value="art">Sort by Art</option>
                            <option value="biography">Sort by Biography</option>
                            <option value="fiction">Sort by Romantic</option>
                            <option value="history">Sort by For kids</option>
                        </select>
                        <button onClick={toggleBlock} className='booksPage__second--main__set'><GoSettings /></button>
                    </div>
                </div>
                <div className="booksPage__third">
                    <div className="booksPage__third--main">
                        <h2>Filters</h2>
                        <a href="">Clear filters</a>
                    </div>
                    <h3 className='booksPage__genres' style={{
                        margin:'24px 0'
                    }}>Genres</h3>
                    <div className="booksPage--block">
                        <div className="booksPage--block__filter">
                            <div className="booksPage--block__filter--chec" style={{display:'flex',}}>
                                <input type="radio"/>
                                <h2 style={{
                                    fontSize:'15px'
                                }}>Autographed Books</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:'center'}}>
                                <input type="radio"/>
                                <h2>Sci-Fi</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:'center'}}>
                                <input type="radio"/>
                                <h2>For kids</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:"center"}}>
                                <input type="radio"/>
                                <h2>For teenagers</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:"center"}}>
                                <input type="radio"/>
                                <h2>Detective</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:"center"}}>
                                <input type="radio"/>
                                <h2>Finance</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:'center'}}>
                                <input type="radio"/>
                                <h2>Romantic</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:'center'}}>
                                <input type="radio"/>
                                <h2>Psychology</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:'center'}}>
                                <input type="radio"/>
                                <h2>Self-Improvement</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:'center'}}>
                                <input type="radio"/>
                                <h2>Educational</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:'center'}}>
                                <input type="radio"/>
                                <h2>Literature</h2>
                            </div>
                            <div className="booksPage--block__filter--chec" style={{display:'flex',alignItems:'center'}}>
                                <input type="radio"/>
                                <h2>Religion</h2>
                            </div>
                        </div>

                <div className="booksPage__fourth">
                    {/* Фильтры */}
                </div>
                <div className="booksPage__fifth">
                    {books.map(book => (
                        <div key={book.id} className={"block"}>
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
                            <h4>{book.volumeInfo.authors}</h4>
                        </div>
                    ))}
                </div>
                </div>
                </div>
                <div className={`booksPage--filters ${isOpen ? 'open' : 'closed'}`} style={{margin:'90px 0 0 15px'}}>
                    <div className="booksPage--filters__text">
                        <h1>Filter</h1>
                        <h1 style={{
                            margin:"15px 0 0 180px"
                        }} href="#" onClick={closeBlock}><TiDelete/></h1>
                    </div>
                    <div className="booksPage--filters__tabs">
                        <h2>Genres</h2>
                        <div className="booksPage--filters__tabs--tab">
                            <input type="checkbox" />
                            <h4>Autographed Books</h4>
                        </div>
                        <div className="booksPage--filters__tabs--tab">
                            <input type="checkbox" />
                            <h4>Sci-Fi</h4>
                        </div>
                        <div className="booksPage--filters__tabs--tab">
                            <input type="checkbox" />
                            <h4>For kids</h4>
                        </div>
                        <div className="booksPage--filters__tabs--tab">
                            <input type="checkbox" />
                            <h4>For teenagers</h4>
                        </div>
                        <div className="booksPage--filters__tabs--tab">
                            <input type="checkbox" />
                            <h4>Finance</h4>
                        </div>
                        <div className="booksPage--filters__tabs--tab">
                            <input type="checkbox" />
                            <h4>Detective</h4>
                        </div>
                        <div className="booksPage--filters__tabs--tab">
                            <input type="checkbox" />
                            <h4>Romantic</h4>
                        </div>
                        <div className="booksPage--filters__tabs--tab">
                            <input type="checkbox" />
                            <h4>Psychology</h4>
                        </div>
                        {/* Остальные фильтры */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksPage;
