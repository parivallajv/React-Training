import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import {
  FormContainer,
  Input,
  Button,
  H2,
  Div,
} from "../React-useState,useEffect/styles";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const [isAdded, setAdded] = useState(false);
  const [isValue, setValue] = useState(false);

  const history = useHistory();

  // const handleImageChange = (e) => {
  //   const file = e?.target?.files[0];
  //   console.log(file);
  //   setThumbnail(file);
  //   if (file) {
  //     const imagePath = URL.createObjectURL(file);
  //     setThumbnail(imagePath.substring(5));
  //   }
  // };

  const handleSubmit = (e) => {
    e?.preventDefault();

    const newProduct = {
      title: productName,
      thumbnail: thumbnail,
    };

    axios
      .post("http://localhost:8000/products/", newProduct)
      .then((response) => {
        console.log("Response:", response?.data);
        setAdded(true);

        setTimeout(() => {
          setAdded(false);
          history.push("/");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <H2>Add Product</H2>
      <Input
        type="text"
        value={productName}
        productName={productName}
        onChange={(e) => {
          setValue(true);
          setProductName(e?.target?.value);
        }}
        placeholder="Enter Name of Product"
        required
      />
      <Input
        type="text"
        onChange={(e) => setThumbnail(e?.target?.value)}
        name="thumbnail"
        placeholder="Enter Image URL"
        required
      />

      {isValue && (
        <Button type="submit">
          Add Product
        </Button>
      )}

      {!isValue && (
        <Button type="submit" disabled onClick={(e) => handleSubmit(e)}>
          Add Product
        </Button>
      )}

      <Div>{isAdded && <Div>Component Added Successfully</Div>}</Div>
    </FormContainer>
  );
};

export default CreateProduct;
