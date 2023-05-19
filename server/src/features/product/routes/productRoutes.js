const { Router } = require("express");
const ProductController = require("../controllers/product");

const productController = new ProductController();

class ProductRoutes {
  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get("/product/search", productController.searchProducts);
    this.router.get("/product/:productId", productController.searchProduct);
    this.router.get(
      "/product/:productId/description",
      productController.searchProductDescription
    );

    return this.router;
  }
}

module.exports = new ProductRoutes();
