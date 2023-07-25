import React, { useState} from "react";
import axios from "axios";
import {
  FormContainer,
  Input,
  FileInput,
  Button,
  H2,
} from "../React-useState,useEffect/styles";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagePath = URL.createObjectURL(file);
      setThumbnail(imagePath.substring(5));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title: productName,
      thumbnail: thumbnail,
    };

    axios
      .post("http://localhost:8000/products/", newProduct)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <FormContainer>
      <H2>Add Product</H2>
      <Input
        type="text"
        value={productName}
        productName={productName}
        onChange={(e) => {
          setProductName(e.target.value);
        }}
        placeholder="Enter Name of Product"
      />
      <FileInput type="file" onChange={handleImageChange} name="thumbnail" />
      <Button type="submit" onClick={(e) => handleSubmit(e)}>
        Create Product
      </Button>
    </FormContainer>
    
  );
};

export default CreateProduct;
