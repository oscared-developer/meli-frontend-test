import { useQuery } from "@tanstack/react-query";
import { getProductDescription } from "../services/meliApi/products";

export const useProductDescription = (productId: string) => {
  const query = useQuery({
    queryKey: ["productDescription", productId],
    queryFn: () => getProductDescription(productId),
  });

  return query;
};
