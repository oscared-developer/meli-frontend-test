import { useQuery } from "@tanstack/react-query";
import { searchProduct } from "../services/meliApi/products";

export const useSearchProduct = (productTerm: string) => {
  const query = useQuery({
    queryKey: ["products", productTerm],
    queryFn: () => searchProduct(productTerm),
  });

  return query;
};
