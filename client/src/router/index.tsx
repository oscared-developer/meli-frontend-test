import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// Declaramos nuestro componente Router y le pasamos nuestro objeto configurador

export const Router = () => {
  return <RouterProvider router={router} />;
};
