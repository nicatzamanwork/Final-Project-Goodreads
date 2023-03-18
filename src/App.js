import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import Navbar from "./scenes/navbar";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Account from "./scenes/account/account";
import BooksPage from "./scenes/myBooks";
import Book from "./scenes/book/book";
import Register from "./scenes/Register-Login/Register";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mybook" element={<BooksPage />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
