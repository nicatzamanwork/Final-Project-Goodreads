import "./App.css";
import GoodreadsHomePage from "./pages/ehtiyat";
import Home from "../src/pages/home";
import BookList from "./BookList";
import UserProfile from "./UserProfile";
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/users/:id" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
