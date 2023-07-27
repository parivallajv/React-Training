import React, { useState } from "react";
import {
  Button,
  Div,
  GridContainer,
  GridItem,
  H1,
  H2,
} from "../React-useState,useEffect/styles";

const Cart = ({ cartItem, setCartItem, setCount, count }) => {
  const [price, setPrice] = useState(0);

  const handleDelete = (id) => {
    const updatedCartItems = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCartItems);

    const TotalPrice = updatedCartItems.reduce(
      (total, items) => total + items.price,
      0
    );
    setPrice(TotalPrice);
    setCount(count - 1);
  };
  return (
    <div>
      <GridContainer>
        {cartItem?.map((data, index) => {
          return (
            <GridItem className="product-List" key={data?.id}>
              <Div>
                <H1>Title : {data?.title}</H1>
                <H2>Price : {data?.price}</H2>
                <Button onClick={() => handleDelete(data?.id)}>DELETE</Button>
              </Div>
            </GridItem>
          );
        })}
      </GridContainer>
      <GridContainer>
        <h2>Count : {count}</h2>
        <h2>Total Price : {price}</h2>
      </GridContainer>
    </div>
  );
};

export default Cart;
