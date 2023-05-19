import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Helmet from "react-helmet";
import { Loader, SearchItem } from "../../components";
import { useSearchProduct } from "../../hooks/useSearchProduct";
import { Item } from "../../interfaces/Item";
import "./SearchResults.styles.scss";

const SearchResult = () => {
  /**
   * Obtenemos los query params de nuestra url gracias a un hook brindado por react-router-dom
   * y se lo pasamos a nuestro hook (useSearchProduct) y gracias a React Query obtendremos distintos
   * estados para trabajar en nuestro componente.
   */
  const [searchParams] = useSearchParams();
  const searchProductQuery = useSearchProduct(searchParams.get("search") || "");
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/items/${id}`);
  };

  // si ocurre un error navegamos a esa direccion que nos mostrara la page NotFound
  if (searchProductQuery.isError) {
    return <Navigate to="/error" />;
  }

  if (searchProductQuery.isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>MELI | {searchParams.get("search")}</title>
        <meta name="description" content="resultados de la busqueda" />
      </Helmet>
      <div className="results__container">
        {searchProductQuery?.data?.results.map((product: Item) => (
          <SearchItem
            item={product}
            key={product.id}
            onClick={handleNavigate}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResult;
