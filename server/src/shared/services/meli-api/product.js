const meliApi = require("./meli.api");

const searchProducts = async (productName) => {
  const products = await meliApi.get(
    `/sites/MLA/search?q=${productName}&limit=4`
  );
  return products.data;
};

const searchProduct = async (productId) => {
  const product = await meliApi.get(`/items/${productId}`);
  return product.data;
};

const searchProductDescription = async (productId) => {
  const product = await meliApi.get(`/items/${productId}/description`);
  return product.data;
};

module.exports = {
  searchProducts,
  searchProduct,
  searchProductDescription,
};
