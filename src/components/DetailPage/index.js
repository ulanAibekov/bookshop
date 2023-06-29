import React, {useEffect, useState} from 'react';
import './style.scss'
import axios from "axios";
import {useNavigate, useParams} from "react-router";
import {AiOutlineHeart, AiOutlinePlus} from "react-icons/ai";
import {HiOutlineShare} from "react-icons/hi";
import {Link} from "react-router-dom";
import Modal from "../Modal";
import DetailBooks from "../DetailBooks";
import {BsTelegram} from "react-icons/bs";


const API_KEY = 'AIzaSyD1z1aKy9_iFzifYabztZePoe4Z-OsPU0Q'
const DetailPage = ({count,setCount, price ,setPrice}) => {
    const [books, setBooks] = useState([])
    // const [count, setCount] = useState(1);
    // const [price, setPrice] = useState(99)
    const [isOpen, setIsOpen] = useState(false);
    const [showBlock, setShowBlock] = useState(false);


    const handleClick = () => {
        setShowBlock(!showBlock);
    };


    const {id} = useParams();
    const navigate = useNavigate()
    const [book, setBook] = useState(null);
    console.log(book)

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
            .then(response => {
                setBook(response.data);
            })
            .catch(error => console.error(error));
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    const incrementCount = () => {
        setCount(count + 1);
        setPrice(price + 99)
    };

    const decrementCount = () => {
        setCount(count - 1);
        setPrice(price - 99)
    };


    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    function navigateToBasket(id) {
        window.scrollTo(0, 0)
            navigate(`/detailBooks/${id}`)
    }


    return (
        <div>
            {/*{books.map(book => (*/}
            <div className="detailMain" key={book.id}>

                <img className="detailMain__img"
                     src={
                         book.volumeInfo.imageLinks
                             ? book.volumeInfo.imageLinks.thumbnail
                             : 'https://via.placeholder.com/150x200?text=No+Image'
                     }
                     alt={book.volumeInfo.title}
                />
                <div className="detailMain__info">
                    <div className="detailMain__info--title">
                        <h1>{book.volumeInfo.title}</h1>
                        <a href="/DetailBooks">
                            <AiOutlineHeart size={"2rem"} className="heartIcon"/>
                        </a>
                        <p onClick={handleOpenModal}>
                            <HiOutlineShare size={"2rem"} className="shateIcon"/>
                        </p>
                        <Modal isOpen={isOpen} onClose={handleCloseModal}>
                            <h2>Поделится книгой</h2>
                            <img className="detailMain__img"
                                 src={
                                     book.volumeInfo.imageLinks
                                         ? book.volumeInfo.imageLinks.thumbnail
                                         : 'https://via.placeholder.com/150x200?text=No+Image'
                                 }
                                 alt={book.volumeInfo.title}
                            />
                            <p>{book.volumeInfo.title}</p>
                            <a href=""><BsTelegram/></a>
                        </Modal>


                    </div>


                    <p>Author: {book.volumeInfo.authors}</p>
                    <p>Published Date: {book.volumeInfo.publishedDate}</p>
                    <p className='detailMain__info--desc'>Description: {book.volumeInfo.description}</p>

                    {/*<button onClick={() => getBookPrice(book.id)}>Get Price</button>*/}
                    {/*{bookPrice && <p>Price: {bookPrice}</p>}*/}
                    <p className="detailMain__info--price">$ {price}</p>
                    <div style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between",
                        width:"83%"
                    }}>

                        <button className='detailMain__info--btn' onClick={() => navigateToBasket(book?.id)}>Add to
                            Cart
                        </button>
                        <div className="detailMain__info--count">
                            <button onClick={decrementCount}>-</button>
                            <p>{count}</p>
                            <button onClick={incrementCount}>+</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailPage;