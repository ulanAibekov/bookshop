import React, {useEffect, useState} from 'react';
import "./style.scss"
import axios from "axios";
import { Link } from "react-router-dom";
const API_KEY = 'AIzaSyD1z1aKy9_iFzifYabztZePoe4Z-OsPU0Q'


const NewBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=search+terms&startIndex=1&maxResults=3&key=${API_KEY}`
            )
            .then((response) => {
                setBooks(response.data.items);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
            {" "}
            <div id="books">
                {" "}
                <div className="container">
                    {" "}
                    <h1 className="new">New Books</h1>{" "}
                    <div className="books">
                        {" "}
                        {books.map((book) => (
                            <div className='books__content' key={book.id}>
                                {" "}
                                <Link to={`/DetailPage/${book.id}`}>
                                    {" "}
                                    <img
                                        src={
                                            book.volumeInfo.imageLinks
                                                ? book.volumeInfo.imageLinks.thumbnail
                                                : "https://via.placeholder.com/150x200?text=No+Image"
                                        }
                                        alt={book.volumeInfo.title}
                                    />{" "}
                                </Link>{" "}
                                <h2>{book.volumeInfo.title}</h2>{" "}
                                <p>{book.volumeInfo.authors}</p>{" "}
                            </div>
                        ))}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
};
export default NewBooks;