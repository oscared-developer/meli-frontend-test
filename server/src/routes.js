const productRoutes = require("./features/product/routes/productRoutes");

const BASE_PATH = "/api/v1";

const Router = (app) => {
  const routes = () => {
    app.use(BASE_PATH, productRoutes.routes());
  };

  routes();
};

module.exports = Router;
