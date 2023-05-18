import { useParams, Navigate } from "react-router";
import Helmet from "react-helmet";
import { useProductDetails } from "../../hooks/useProductDetails";
import { useProductDescription } from "../../hooks/useProductDescription";
import { Loader, ProductItem } from "../../components";
import "./ProductDetails.styles.scss";

const ProductDetails = () => {
  const { id = "" } = useParams();
  const productDetails = useProductDetails(id);
  const productDescription = useProductDescription(id);

  if (productDetails.isError) {
    return <Navigate to="/error" />;
  }

  if (productDetails.isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>MELI | {productDetails?.data?.title || ""}</title>
        <meta name="description" content="detalles del producto" />
      </Helmet>
      <div className="product-details__container">
        <ProductItem
          details={productDetails.data}
          description={productDescription.data}
        />
      </div>
    </>
  );
};

export default ProductDetails;
