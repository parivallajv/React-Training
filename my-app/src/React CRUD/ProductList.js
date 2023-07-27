import { useState } from "react";
import {
  Div,
  Img,
  GridContainer,
  GridItem,
  H1,
  Button,
  Input,
  H4,
} from "../React-useState,useEffect/styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductList = ({ products, handleDelete, handleUpdate, handleEdit ,addToCart}) => {
  const [productName, setProductName] = useState(null);
  const [thumbnail, setThumbnail] = useState();
  const [isEditBtn, setEditBtn] = useState(true);
  const [inputBox, setInputBox] = useState(false);
  const [updateBtn, setUpdateBtn] = useState(false);

  return (
    <div>
      <GridContainer>
        {products.map((product, index) => {
          return (
            <GridItem className="product-List" key={product?.id}>
              <Div>
                <Link to={`/products/${product?.id}`}>
                  <Img src={`${product?.thumbnail}`} />
                  <H1 styles={{ textDecoration: "none" }}>{product?.title}</H1>
                </Link>
                <H4>`Price : {product?.price}$`</H4>
                {inputBox && (
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
                  </div>
                )}

                {isEditBtn && (
                  <Button
                    onClick={() =>
                      handleEdit(
                        product?.id,
                        setEditBtn,
                        setInputBox,
                        setUpdateBtn
                      )
                    }
                  >
                    Edit
                  </Button>
                )}
                {updateBtn && (
                  <Button
                    productName={productName}
                    onClick={() =>
                      handleUpdate(
                        product?.id,
                        productName,
                        thumbnail,
                        setInputBox,
                        setEditBtn
                      )
                    }
                  >
                    Update
                  </Button>
                )}

                <Button onClick={() => handleDelete(product?.id)}>
                  Delete
                </Button>
                <Button onClick={()=>addToCart(product?.id,product?.title,product?.price,product)}>Add to Cart</Button>
              </Div>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default ProductList;
