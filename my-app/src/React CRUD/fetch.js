import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useFetch = (url) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isErr, setErr] = useState(null);

  const history = useHistory();

  const handleCreateProduct = async (newProductData) => {
    try {
      setLoading(true);
      const response = await axios.post(url, newProductData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProducts([...products, response?.data]);
      setLoading(false);
    } catch (error) {
      console.error("Error creating a new product:", error);
      setErr("Failed to create a new product.");
      setLoading(false);
    }
  };

  const handleUpdate = (id, BrandName,thumbnail) => {
    let newObj = {
      title: `${BrandName}`,
      thumbnail: `${thumbnail}`
    };

    if (newObj?.title === null) {
      alert("enter product name");
    } else {
      axios.put(`http://localhost:8000/products/${id}`, newObj).then((res) => {
        if (res?.status === 200) {
          const newProducts = products?.map((data) => {
            return data;
          });

          setProducts(newProducts);
          history.push("/");
          alert("product name updated successfully");
        } else {
          throw Error("Failed to update the product from the backend.");
        }
      });
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/products/${id}`)
      .then((res) => {
        if (res?.status === 200) {
          const newProducts = products?.filter((data) => {
            return data?.id !== id;
          });
          setProducts(newProducts);
          alert("product deleted successfully");
          history.push("/");
        } else {
          throw Error("Failed to delete the product from the backend.");
        }
      })
      .catch((err) => {
        console.error(err);
        setErr("Failed to delete the product from the backend.");
      });
  };

  const handleEdit=(id)=>{
    
  }


  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          if (res?.status !== 200) {
            throw Error("data cannot be fetched");
          } else {
            setProducts(res?.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          setErr(err?.message);
          setLoading(false);
        });
    }, 1200);
  }, [url]);

  return {
    isLoading,
    isErr,
    products,
    handleDelete,
    handleCreateProduct,
    handleUpdate,
    handleEdit
  };
};

export default useFetch;
