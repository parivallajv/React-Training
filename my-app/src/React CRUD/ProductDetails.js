import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="product-details">
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default ProductDetails;
