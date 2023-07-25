import { useState } from "react";
import {
  Div,
  Img,
  GridContainer,
  GridItem,
  H1,
  Button,
  Input,
  FileInput,
} from "../React-useState,useEffect/styles";

const ProductList = ({ products, handleDelete, handleUpdate,handleImageChange}) => {
  const [productName, setProductName] = useState();
  const handleProductName = (e) => {
    setProductName(e.target.value);
  };
  return (
    <div>
      <Input onChange={handleProductName} placeholder="Enter name for Update" style={{marginLeft:"25%"}}></Input>
      <FileInput type="file" onChange={handleImageChange} name="thumbnail" style={{marginLeft:"25%"}} />
      <GridContainer>
        {products.map((product, index) => {
          return (
            <GridItem className="product-List" key={product.id}>
              <Div>
                <Img src={`${product.thumbnail}`} />
                <H1>{product.title}</H1>
                <Button onClick={() => handleUpdate(product.id, productName)}>
                  Update
                </Button>
                <Button onClick={() => handleDelete(product.id)}>Delete</Button>
              </Div>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default ProductList;
