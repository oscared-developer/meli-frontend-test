import { useParams, Navigate } from "react-router";
import Helmet from "react-helmet";
import { useProductDetails } from "../../hooks/useProductDetails";
import { useProductDescription } from "../../hooks/useProductDescription";
import { Loader, ProductItem } from "../../components";
import "./ProductDetails.styles.scss";

const ProductDetails = () => {
  /**
   *  Obtenemos nuestra id de los parametros en la URL gracias a un hook de react-router-dom,
   *  el cual se lo pasamos a nuestros custom hooks para realizar las peticiones correspondientes y generar
   *  los estados necesarios.
   *
   *  gracias a esto deslindamos responsabilidades y cada pieza de codigo se encarga de realizar un trabajo
   *  los custom hooks de obtener informacion
   *  los componentes de recibirla
   *  y las paginas de represantar esta informacion de forma agradable para el usuario.
   */
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
