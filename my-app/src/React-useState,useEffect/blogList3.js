import { H1, H2, Button } from "./styles";
import { Div } from "./styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div>
      <H1>{title}</H1>

      {blogs.map((blog) => {
        return (
          <div className="blog-list" key={blog.id}>
            <Div className="blog-preview">
              <Link to={`/blogs/${blog.id}`}>
              <H2>Title: {blog.title}</H2>
              <h3>Body : {blog.body}</h3>
              <h4>Author: {blog.author}</h4>
              <Button onClick={() => handleDelete(blog.id)}>Delete</Button>
              </Link>
            </Div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
