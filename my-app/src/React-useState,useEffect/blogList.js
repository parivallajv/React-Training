import { H2 } from "./styles";
import { Div } from "./styles";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <Div className="blog-preview" key={blog.id}>
          <H2>{blog.title}</H2>
          <p>{blog.body}</p>
          <p>Author : {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </Div>
      ))}
    </div>
  );
};

export default BlogList;
