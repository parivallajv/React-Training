import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isErr, setErr] = useState(null);

  const handleCreateProduct = async (newProductData) => {
    try {
      setLoading(true);
      const response = await axios.post(url, newProductData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProducts([...products, response.data]);
      setLoading(false);
    } catch (error) {
      console.error("Error creating a new product:", error);
      setErr("Failed to create a new product.");
      setLoading(false);
    }
  };

  const handleUpdate = (id,BrandName)=>{
      let newObj={
        title: `${BrandName}`,
        thumbnail : "https://i.dummyjson.com/data/products/6/thumbnail.png"
      }
          axios.put(`http://localhost:8000/products/${id}`,newObj)
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/products/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const newProducts = products.filter((data) => {
            return data.id !== id;
          });
          setProducts(newProducts);
        } else {
          throw Error("Failed to delete the product from the backend.");
        }
      })
      .catch((err) => {
        console.error(err);
        setErr("Failed to delete the product from the backend.");
      });
  };

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          if (res.status !== 200) {
            throw Error("data cannot be fetched");
          } else {
            setProducts(res.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          setErr(err.message);
          setLoading(false);
        });
    }, 1000);
  },[url]);

  return {
    isLoading,
    isErr,
    products,
    handleDelete,
    handleCreateProduct,
    handleUpdate,
  };
};

export default useFetch;
