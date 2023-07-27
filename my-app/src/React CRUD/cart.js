import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import React from "react";
import {
  Div,
  GridContainer,
  GridItem,
  H1,
  H2,
  H4,
} from "../React-useState,useEffect/styles";
import useFetch from "./fetch";
import { useState } from "react";

const Cart = ({cartUrl}) => {

  const { cartItem } = useFetch(cartUrl);
  console.log("cart", cartItem);

  return (
    <div>
      <GridContainer>
        {cartItem?.map((data, index) => {
          return (
            <GridItem className="product-List" key={data?.id}>
              <Div>
                {/* <Link to={`/cart/${data?.id}`}> */}
                <H1>Title : {data?.title}</H1>
                <H2>Price : {data?.price}</H2>
                {/* </Link> */}
              </Div>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default Cart;
