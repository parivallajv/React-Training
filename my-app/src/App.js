import Home3 from "./React-useState,useEffect/Home3";
import CreateBlog from "./React-useState,useEffect/createBlog";
import Navbar from "./React-useState,useEffect/navBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home3 />
              </Route>
              <Route exact path="/create">
                <CreateBlog/>
              </Route>
            </Switch>
          </div>
        
      </div>
    </Router>
  );
}

export default App;
