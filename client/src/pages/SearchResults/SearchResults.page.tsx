import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchItem } from "../../components";
import { useSearchProduct } from "../../hooks/useSearchProduct";
import "./SearchResults.styles.scss";
import { Item } from "../../interfaces/Item";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchProductQuery = useSearchProduct(searchParams.get("search") || "");
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/items/${id}`);
  };

  if (searchProductQuery.isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="results__container">
      {searchProductQuery?.data?.results.map((product: Item) => (
        <SearchItem item={product} key={product.id} onClick={handleNavigate} />
      ))}
    </div>
  );
};

export default SearchResult;
