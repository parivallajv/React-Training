import React from "react";
import useFetch from "./fetch";
import { Div, H2 } from "../React-useState,useEffect/styles";
import ProductList from "./ProductList";
import Cart from "./cart";

const Home = () => {
  const {
    isErr,
    isLoading,
    products,
    handleDelete,
    handleUpdate,
    handleEdit,
    addToCart,
    cartItem
  } = useFetch("http://localhost:8000/products");
  console.log("home",cartItem);


  return (
    <div className="Home">
      <Cart cartUrl="http://localhost:8000/products" />
      {isLoading && <Div>Loading....</Div>}
      {isErr && <Div>{isErr}</Div>}
      {products && (
        <>
          <H2>Update Product</H2>
          <ProductList
            products={products}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            addToCart={addToCart}
          />
        </>
      )}
    </div>
  );
};

export default Home;
