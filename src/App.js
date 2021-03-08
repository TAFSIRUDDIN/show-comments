import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home">Home2</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
           <About></About>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
