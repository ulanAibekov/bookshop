import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "AIzaSyD1z1aKy9_iFzifYabztZePoe4Z-OsPU0Q";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=search+terms&startIndex=0&maxResults=10&key=${API_KEY}`
      )
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
      <div id='books'>
    <div className="container">
      <div className="books">
        <div className="books__title">
          <h1>Books</h1>
          <Link to="/BookPage" className="books__view">
            View all
          </Link>
        </div>
        <div className="books__anyBooks">
          {books.map((book) => (
            <div className="book" key={book.id}>
              <Link to={`/DetailPage/${book.id}`}>
                <img
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "https://via.placeholder.com/150x200?text=No+Image"
                  }
                  alt={book.volumeInfo.title}
                />
              </Link>
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.authors}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
  );
};

export default Books;
