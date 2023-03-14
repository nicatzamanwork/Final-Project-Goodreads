import React, { useState, useEffect } from "react";
import classes from "./book.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../../store/createSlice";

function BookList(props) {
  const [books, setBooks] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:5000/api/book")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const addToCart = (item) => {
    dispatch(add(item));
    console.log(item);
  };

  return (
    <div>
      <h1>Book List</h1>
      <div className="item-container">
        {books &&
          books.map((book) => (
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
                onClick={() => addToCart(book)}
              >
                Want to Read
              </button>
              <h1>Heool</h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BookList;
