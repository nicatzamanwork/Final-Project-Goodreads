import React, { useState, useEffect } from "react";
import classes from "./book.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../../store/createSlice";
import { NavLink } from "react-router-dom";

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

  const [categoryName, setCategoryName] = useState("");
  console.log(categoryName);
  const handle = (e) => {
    setCategoryName(e.target.value);
  };

  return (
    <div>
      <h1>Book List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={(e) => handle(e)}
          value=""
          style={{
            backgroundColor: "brown",
            color: "white",
            padding: "10px 20px",
            marginRight: "10px",
            marginBottom: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          All
        </button>
        <button
          onClick={(e) => handle(e)}
          value="fiction"
          style={{
            backgroundColor: "brown",
            color: "white",
            padding: "10px 20px",
            marginRight: "10px",
            marginBottom: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Fiction
        </button>
        <button
          onClick={(e) => handle(e)}
          value="comedy"
          // onClick={(e) => setCategoryName(e.target.value)}
          style={{
            backgroundColor: "brown",
            color: "white",
            padding: "10px 20px",
            marginRight: "10px",
            marginBottom: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Comedy
        </button>
        <button
          onClick={(e) => handle(e)}
          value="horror"
          style={{
            backgroundColor: "brown",
            color: "white",
            padding: "10px 20px",
            marginRight: "10px",
            marginBottom: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }} // onClick={(e) => setCategoryName(e.target.value)}
        >
          Horror
        </button>
      </div>

      <div className="item-container">
        {books &&
          books.map(
            (book) =>
              (categoryName === "" || book.category === categoryName) && (
                <div className="card">
                  {" "}
                  <NavLink to={`/book/${book._id}`}>
                    <img
                      src={book.image}
                      style={{ width: "300px", height: "300px" }}
                    />
                  </NavLink>
                  <h2>{book.title}</h2>
                  <p>Author: {book.author}</p>
                  <p>Category: {book.category}</p>
                  <button
                    style={{
                      width: "120px",
                      color: "white",
                      backgroundColor: "green",
                      borderRadius: "5px",
                      height: "50px",
                      cursor: "pointer",
                    }}
                    onClick={() => addToCart(book)}
                  >
                    Want to Read
                  </button>
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default BookList;
