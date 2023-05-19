import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import ProductDetails from "../pages/ProductDetails/ProductDetails.page";
import SearchResults from "../pages/SearchResults/SearchResults.page";
import NotFound from "../pages/NotFound/NotFound.page";

/**
 *  Con la nueva actualizacion de react-router-dom nos permite crear un objeto configurador de rutas,
 *  definimos nuestra ruta principal ("/") y las rutas hijas de esta, a su vez agregamos un componente (<NotFound/ >)
 *  que se mostrara cada que ingresemos a una pagina no definida en nuestra app.
 *
 *  NOTA: se prodria usar el componente <Navigate /> para regresar a la pagina de inicio si ingresamos a una pagina no definida
 *  pero me parecio mejor experiencia de usuario crear una pagina NotFound
 */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
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
