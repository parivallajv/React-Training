import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import CreateProduct from "./createProduct";
import About from "./about";
import Support from "./support";
import ProductDetails from "./ProductDetails";
import NotFound from "./NotFound";
import Cart from "./cart";
import { useState } from "react";

const ProductRoute = () => {
  const [cartItem, setCartItem] = useState([]);

  const [count, setCount] = useState(0);


  const addToCart = (product) => {
    setCartItem((prevData) => [...prevData, product]);

    setCount(count + 1);

    // const updatedCartItems = cartItem.filter((item) => item.id !== id);
    // setCartItem(updatedCartItems);

        
    // const TotalPrice = updatedCartItems.reduce(
    //     (total, items) => total + items.price,
    //     0
    //   );
    //   setPrice(TotalPrice);

  };

  console.log("cartItem", cartItem);

  return (
    <Router>
      <div className="product-router">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home addToCart={addToCart} />
            </Route>
            <Route path="/create">
              <CreateProduct />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/help">
              <Support />
            </Route>
            <Route path="/cart">
              <Cart
                cartItem={cartItem}
                setCartItem={setCartItem}
                count={count}
                setCount={setCount}
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default ProductRoute;
