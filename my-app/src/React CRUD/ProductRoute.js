import Home from './Home'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './navbar';
import CreateProduct from './createProduct';
import About from './about';
import Support from './support';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';

const ProductRoute = () => {
    return (
    <Router>
    <div className='product-router'>
        <Navbar/>
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/create">
                    <CreateProduct/>
                </Route>
                <Route path="/products/:id">
                    <ProductDetails/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/help">
                    <Support/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </div>

    </div>  
    </Router>
    );
}
 
export default ProductRoute;