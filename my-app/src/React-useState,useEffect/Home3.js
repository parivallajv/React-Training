import BlogList from "./blogList3";
import { Div } from "./styles";
import useFetch from "./useFetch";
const Home3 = () => {
  const { isErr, isLoading, blogs, handleDelete } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="Home3">
      {isLoading && <Div>Loading.....</Div>}
      {isErr && <Div>{isErr}</Div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          isLoading={isLoading}
          isErr={isErr}
          title={"List Of Users"}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home3;
