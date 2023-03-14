import React, { useState } from "react";
import { useSelector } from "react-redux";
import BookList from "../homePage/bookList";
import Navbar from "../navbar";
function BooksPage() {
  const [books, setBooks] = useState([]);
  let { cart } = useSelector((state) => state.CartReducer);
  console.log(cart);
  function handleBookClick(title) {
    setBooks([...books, { title }]);
  }

  return (
    <div>
      <h1>My Books</h1>
      <div className="item-container">
        {cart &&
          cart.map((book) => (
            <div className="card">
              {" "}
              <img src={book.image} />
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <button
                style={{
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "5px",
                }}
              >
                Want to Read
              </button>
              <h1>Heool</h1>
            </div>
          ))}
      </div>
      {/* <BookList onClick={() => handleBookClick("Book Title")} /> */}
    </div>
  );
}

export default BooksPage;
