import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Mybooks from "./pages/mybooks";
import Home from "./pages/home";
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
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mybooks" element={<Mybooks />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
