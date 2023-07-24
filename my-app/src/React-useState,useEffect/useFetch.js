import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isErr, setErr] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((data) => {
      return data.id !== id;
    });
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          if (res.status !== 200) {
            throw Error("data cannot be fetched");
          } else {
            setBlogs(res.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          setErr(err.message);
          setLoading(false);
        });
    }, 1000);
  }, [url]);

  return {isLoading,isErr,blogs,handleDelete};
};

export default useFetch;
