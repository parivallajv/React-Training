import React from "react";
import useFetch from "./fetch";
import { Div, H2 } from "../React-useState,useEffect/styles";
import ProductList from "./ProductList";

const Home = () => {
  const { isErr, isLoading, products, handleDelete, handleUpdate } = useFetch(
    "http://localhost:8000/products"
  );

  return (
    <div className="Home">
      {isLoading && <Div>Loading....</Div>}
      {isErr && <Div>{isErr}</Div>}
      {products && (
        <>
          <H2>Update Product</H2>
          <ProductList
            products={products}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
};

export default Home;
