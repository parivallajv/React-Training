import {Router} from 'react-router-dom';
import Navbar from './navBar';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home3 from './Home3';
import CreateBlog from './createBlog';
import BlogDetails from './blogDetails';

const Route = () => {
    return (<div>
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
    </div>  );
}
 
export default Route;