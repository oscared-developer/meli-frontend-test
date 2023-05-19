import { meliApi } from "./client";

export const searchProduct = async (productName: string) => {
  const products = await meliApi.get(
    `/product/search?searchTerm=${productName}`
  );
  return products.data;
};

export const getProductDetails = async (productId: string) => {
  const product = await meliApi.get(`/product/${productId}`);
  return product.data;
};

export const getProductDescription = async (productId: string) => {
  const product = await meliApi.get(`/product/${productId}/description`);
  return product.data;
};
