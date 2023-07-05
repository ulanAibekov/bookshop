import './style.scss'
import './media.scss'

import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineRightCircle } from "react-icons/ai";
import Checkbox from "../../img/Checkbox Off.png";
import Blue from "../../img/i.webp";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Modal1 from "../Modal1";

const API_KEY = 'AIzaSyD1z1aKy9_iFzifYabztZePoe4Z-OsPU0Q'

const DetailBooks = ({ count, price }) => {
    const [remove, setRemove] = useState(false);
    const [books, setBooks] = useState({});
    const [select, setSelect] = useState(false);
    const [imageSrc, setImageSrc] = useState({ Checkbox });
    const [isOpen, setIsOpen] = useState(false);
    const [showCart, setShowCart] = useState(true);

    const { id } = useParams();

    const getBooks = async () => {
        const res = await axios(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`);
        const data = await res.data;
        setBooks(data);
    };

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        getBooks();
    }, []);

    const handleRemove = () => {
        setRemove(true);
        setShowCart(false);
    };

    return (
        <div id='detail'>
            <div className="container">
                <div className="yourCart">
                    <h1>Your cart</h1>
                    {showCart ? (
                        <p>Not ready to checkout? <Link to={"/BookPage"}>Continue Shopping</Link></p>
                    ) : (
                        <h5 style={{
                          margin:"20% 38%",
                            width:"250px",
                            fontSize:"25px",
                            color:"#6d6d6e"
                        }}>"Your cart is empty"</h5>
                    )}
                </div>

                {showCart && (
                    <div key={books?.id}>
                        <div className="detail">
                            <div className='detail--wrap'>
                                <div className="detail--wrap__block">
                                    <div className="detail--wrap__block__one" style={{ display: remove ? "none" : "flex" }}>
                                        <img
                                            src={
                                                books?.volumeInfo?.imageLinks
                                                    ? books?.volumeInfo?.imageLinks?.thumbnail
                                                    : 'https://via.placeholder.com/150x200?text=No+Image'
                                            }
                                            alt={books?.volumeInfo?.title}
                                        />

                                        <div className="detail--wrap__block__one--content">
                                            <div className="detail--wrap__block__one--content__texty">
                                                <h2 style={{
                                                    fontSize: "22px"
                                                }}>{books?.volumeInfo?.title}</h2>
                                            </div>
                                            <p style={{
                                                paddingTop: "10px"
                                            }}>{books?.volumeInfo?.authors}</p>
                                            <div className='detail--wrap__block__one--content__quantity'>
                                                <h3>Quantity: {count}</h3>
                                                <h4>${price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hr'>
                                        <button className="detail--wrap__remove" style={{ display: remove ? "none" : "flex" }}
                                                onClick={handleRemove}>Remove
                                        </button>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="detail--select">
                                <h1>Order Summary</h1>
                                <div className="detail--select__shipping">
                                    <details>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column"
                                        }}>

                                            <input type="text" placeholder="Your address" />
                                            <input type="number" placeholder="Your phone number" />
                                            <button className="detail--select__shipping--send">Send</button>
                                        </div>
                                        <summary>
                                            <p>SHIPPING</p>
                                            <h5 className="h5">Select Method <AiOutlineRightCircle
                                                onClick={() => setSelect(!select)}
                                                style={{
                                                    transition: ".3s",
                                                    transform: select ? '' : "rotate(90deg)"
                                                }}
                                            /></h5>
                                        </summary>
                                    </details>
                                </div>
                                <div className="detail--select__shipping">
                                    <details>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column"
                                        }}>
                                            <select>
                                                <option>OPTIMA BANK</option>
                                                <option>MBANK</option>
                                                <option>BAKAI BANK</option>
                                                <option>RSK BANK</option>
                                            </select>
                                            <input type="number" placeholder="Your card number" />
                                            <input type="text" placeholder="Name on card" />
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }}>
                                                <input className="detail--select__shipping--code__in1" style={{
                                                    width: "30%",
                                                }} type="text" placeholder="ММ/ГГ" />
                                                <input className="detail--select__shipping--code__in2" style={{
                                                    width: "30%"
                                                }} type="text" placeholder="CVV/CVC" />
                                            </div>
                                        </div>
                                        <summary>
                                            <p>PAYMENT</p>
                                            <h5 className="h5">Select Method <AiOutlineRightCircle
                                                onClick={() => setSelect(select)}
                                                style={{
                                                    transition: ".3s",
                                                    transform: select ? '' : "rotate(90deg)"
                                                }}
                                            /></h5>
                                        </summary>
                                    </details>
                                </div>

                                <div className="detail--select__total">
                                    <h1>Total</h1>
                                    <h3>${price}</h3>
                                </div>
                                <button className="detail--select__btn" onClick={handleOpenModal}>Continue to checkout</button>
                                <Modal1 isOpen={isOpen} onClose={handleCloseModal} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailBooks;
