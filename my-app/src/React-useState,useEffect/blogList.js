import { H1, H2, Img, Button, Div2 } from "./styles";
import { Div } from "./styles";


const nameRegex = /^[A-Za-z]+$/;

const BlogList = ({ blogs, title, handleDelete, handleEdit }) => {
  return (
    
    <div>
      <H1>{title}</H1>
      <Div>
        <H2>NAME</H2>
        <H2>ROLE</H2>
        <H2>PHOTO</H2>
        <H2>EDIT / DELETE</H2>
      </Div>
      {blogs.map((blog) => {
        if (!nameRegex.test(blog.name)) {
          return null;
        }

        return (
          <div className="blog-list" key={blog.id}>
            <Div className="blog-preview">
              <Div2>
                <p>{blog.name}</p>
              </Div2>
              <Div2>
                <p>{blog.role}</p>
              </Div2>
              <Div2>
                <Img src={`${blog.avatar}`} alt="" />
              </Div2>
              <Div2>
                <Button onClick={() => handleDelete(blog.id)}>Delete</Button>
              </Div2>
            </Div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
