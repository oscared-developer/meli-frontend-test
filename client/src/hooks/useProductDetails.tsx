import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../services/meliApi/products";

export const useProductDetails = (productId: string) => {
  const query = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductDetails(productId),
  });

  return query;
};
