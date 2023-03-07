import "./App.css";
import GoodreadsHomePage from "./pages/ehtiyat";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/ehtiyat" element={<GoodreadsHomePage />} />
      </Routes>
    </div>
  );
}

export default App;
