import { meliApi } from "./client";

export const searchProduct = async (productName: string) => {
  const products = await meliApi.get(
    `/sites/MLA/search?q=${productName}&limit=4`
  );
  return products.data;
};

export const getProductDetails = async (productId: string) => {
  const product = await meliApi.get(`/items/${productId}`);
  return product.data;
};

export const getProductDescription = async (productId: string) => {
  const product = await meliApi.get(`/items/${productId}/description`);
  return product.data;
};
