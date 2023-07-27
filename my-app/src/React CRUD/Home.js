import React from "react";
import useFetch from "./fetch";
import { Div } from "../React-useState,useEffect/styles";
import ProductList from "./ProductList";
import Cart from "./cart";

const Home = ({addToCart}) => {
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
