import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const id = useParams();
  console.log(id);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      const response = await fetch(`http://localhost:5000/api/book/${id}`);
      setBook(await response.json());
    };
    getBook();
  }, []);
  console.log(book);
  const ShowProduct = () => {
    return (
      <>
        <div className="container" width="500px">
          <h2>{book.title}</h2>
          <img src={book.image} alt={book.title} />
          <p>Author: {book.author}</p>
          <p>Category: {book.category}</p>
        </div>
      </>
    );
  };

  return (
    <div className="container" width="500px">
      <div className="row">
        <ShowProduct />
      </div>
    </div>
  );
};
export default Book;
