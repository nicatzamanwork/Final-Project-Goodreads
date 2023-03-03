import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Mybooks from "./pages/mybooks";
import Home from "./pages/home";
import { useSelector } from "react-redux";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Signup from "./components/signup/signup";
function App() {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log("cart", cart);
  console.log("totalAmount", totalAmount);
  console.log("totalPrice", totalPrice);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/filteredproducts/:type"
          element={<FilteredProducts />}
        ></Route>
        <Route
          path="/filteredproducts/:type/:id"
          element={<SingleProduct />}
        ></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/mybooks" element={<Mybooks />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
