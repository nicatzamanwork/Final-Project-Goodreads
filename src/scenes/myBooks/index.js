import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/createSlice";
import BookList from "../homePage/bookList";
import Navbar from "../navbar";
function BooksPage() {
  const [books, setBooks] = useState([]);
  let { cart } = useSelector((state) => state.CartReducer);
  console.log(cart);
  function handleBookClick(title) {
    setBooks([...books, { title }]);
  }

  let dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(add(item));
  };

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
                  width: "120px",
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "15px",
                  borderRadius: "5px",
                  height: "50px",
                  cursor: "pointer",
                }}
                onClick={() => addToCart(book)}
              >
                Delete from list
              </button>
            </div>
          ))}
      </div>
      {/* <BookList onClick={() => handleBookClick("Book Title")} /> */}
    </div>
  );
}

export default BooksPage;
