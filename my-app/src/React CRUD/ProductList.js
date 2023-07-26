import { useState } from "react";
import {
  Div,
  Img,
  GridContainer,
  GridItem,
  H1,
  Button,
  Input,
} from "../React-useState,useEffect/styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductList = ({
  products,
  handleDelete,
  handleUpdate,
  handleEdit,
}) => {
  const [productName, setProductName] = useState();
  const [thumbnail, setThumbnail] = useState();
  return (
    <div>
      <Input
        onChange={(e) => setProductName(e?.target?.value)}
        placeholder="Enter name for Update"
        required
      ></Input>
      <Input
        type="text"
        onChange={(e) => setThumbnail(e?.target?.value)}
        name="thumbnail"
        placeholder="Enter Image URL"
      />
      <GridContainer>
        {products.map((product, index) => {
          return (
            <GridItem className="product-List" key={product?.id}>
              <Div>
                <Link to={`/products/${product?.id}`}>
                  <Img src={`${product?.thumbnail}`} />
                  <H1 styles={{ textDecoration: "none" }}>{product?.title}</H1>
                </Link>
                <Button
                  onClick={() =>
                    handleEdit(product?.id, productName, thumbnail)
                  }
                >
                  Edit
                </Button>
                <Button
                  onClick={() =>
                    handleUpdate(product?.id, productName, thumbnail)
                  }
                >
                  Update
                </Button>
                <Button onClick={() => handleDelete(product?.id)}>
                  Delete
                </Button>
              </Div>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default ProductList;
