import { useParams } from "react-router";
import { useProductDetails } from "../../hooks/useProductDetails";
import { useProductDescription } from "../../hooks/useProductDescription";
import { ProductItem } from "../../components";
import "./ProductDetails.styles.scss";

const ProductDetails = () => {
  const { id = "" } = useParams();
  const productDetails = useProductDetails(id);
  const productDescription = useProductDescription(id);

  if (productDetails.isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-details__container">
      <ProductItem
        details={productDetails.data}
        description={productDescription.data}
      />
    </div>
  );
};

export default ProductDetails;
