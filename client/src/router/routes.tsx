import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import ProductDetails from "../pages/ProductDetails/ProductDetails.page";
import SearchResults from "../pages/SearchResults/SearchResults.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Pagina no encontrada</div>,
    children: [
      {
        path: "items",
        element: <SearchResults />,
      },
      {
        path: "items/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
