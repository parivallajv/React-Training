import { H1, H2, Button } from "./styles";
import { Div } from "./styles";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div>
      <H1>{title}</H1>

      {blogs.map((blog) => {
        return (
          <div className="blog-list" key={blog.id}>
            <Div className="blog-preview">
              <H2 style={{ padding: "1%" }}>Title: {blog.title}</H2>
              <h3 style={{ padding: "1%", width: "90%" }}>
                Body : {blog.body}
              </h3>
              <h4 style={{ padding: "1%" }}>Author: {blog.author}</h4>
              <Button
                style={{ padding: "0.5%", boxSizing: "content-box" }}
                onClick={() => handleDelete(blog.id)}>
                Delete
              </Button>
            </Div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
