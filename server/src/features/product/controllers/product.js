const {
  searchProducts,
  searchProduct,
  searchProductDescription,
} = require("../../../shared/services/meli-api/product");

module.exports = class ProductController {
  async searchProducts(req, res) {
    const { searchTerm } = req.query;

    const productSearchResult = await searchProducts(searchTerm);
    res.status(200).json(productSearchResult);
  }

  async searchProduct(req, res) {
    const { productId } = req.params;

    const product = await searchProduct(productId);
    return res.status(200).json(product);
  }

  async searchProductDescription(req, res) {
    const { productId } = req.params;

    const productDescription = await searchProductDescription(productId);
    return res.status(200).json(productDescription);
  }
};
