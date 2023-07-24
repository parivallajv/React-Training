import Home3 from "./React-useState,useEffect/Home3";
import BlogDetails from "./React-useState,useEffect/blogDetails";
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
              <Route path="/create">
                <CreateBlog/>
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
            </Switch>
          </div>
        
      </div>
    </Router>
  );
}

export default App;
