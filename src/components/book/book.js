import React from "react";

const Book = ({ book }) => {
  return (
    <div className="book">
      <img src={book.imageUrl} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <span>{book.rating} stars</span>
    </div>
  );
};

export default Book;
