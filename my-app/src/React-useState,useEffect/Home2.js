import BlogList from "./blogList";

import { useEffect, useState } from "react";

const Home2 = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((data) => {
      return data.id !== id;
    });
    setBlogs(newBlogs);
  };

  const [name, setName] = useState("leo");

  useEffect(() => {
    console.log("useEffect Run");
    console.log(name);
  }, [name]);

  return (
    <div className="Home">
      <BlogList
        blogs={blogs}
        title={"All titles"}
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((data) => data.id === 2)}
        title={"Every titles"}
      />
      <button onClick={() => setName("master")}>Click me</button>
      <p>{name}</p>
    </div>
  );
};

export default Home2;
