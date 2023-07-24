import BlogList from "./blogList";
import axios from 'axios'

import { useEffect, useState } from "react";

const Home2 = () => {
  const [blogs, setBlogs] = useState(null);

  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((data) => {
      return data.id !== id;
    });
    setBlogs(newBlogs);
  };

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/users')
    .then(res=>{
        setBlogs(res.data)
    })
    .catch(err=>console.log(err+" caught"))

  }, []);

  return (
    <div className="Home2">
      {blogs && <BlogList blogs={blogs} title={"List Of Users"} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home2;
