import React from "react";
import useFetch from "./fetch";
import { Div } from "../React-useState,useEffect/styles";
import ProductList from "./ProductList";

const Home = ({addToCart,cartItem}) => {
  const {
    isErr,
    isLoading,
    products,
    handleDelete,
    handleUpdate,
    handleEdit,
  } = useFetch("http://localhost:8000/products");

  return (
    <div className="Home">
      {isLoading && <Div>Loading....</Div>}
      {isErr && <Div>{isErr}</Div>}
      {products && (
        <>
        <h2>count : {cartItem.length}</h2>
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
