import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../services/meliApi/products";

/**
 *  Creamos un customHook para obtener los detalles de un producto,
 *  gracias al hook que nos brinda React Query (useQuery), podemos realizar la peticion
 *  hacia nuestro servidor y obtenr distintas propiedades por ejemplo:
 *  data : un objeto con los  resultados de la petición en caso de ser exitosa.
 *  isLoading: true/false un estado que nos permite saber si los datos de nuestra petición se estan cargando en la memoria cache.
 *  isFetching: true/false un estado que nos permite saber el status de la request hacia nuestro servidor
 *  isError: true/false un estado que nos permite saber si ocurrio un error en nuestra peticion.
 *  error: un objeto con el error de nuestro servidor en caso de que este exista.
 *
 *  gracias a este hook podemos trabajar de forma limpia, ya que si en un futuro queremos cambiar la herramienta para
 *  consumir este endpoint y trabar con el estado asyncrono que este nos brindara (loadings, manejo de errores, etc),
 *  basta con venir aqui y realizar ese mantenimiento.
 *
 *  asi quitamos la responsabiliad a nuestros componentes y/o pages
 */

export const useProductDetails = (productId: string) => {
  const query = useQuery({
    queryKey: ["product", productId], // con esto le estamos diciendo a React Query que almacene nuestra peticion en cache mediante un identificador unico como lo es el id del producto, y la Key identificadora de nuestra petición.
    queryFn: () => getProductDetails(productId), // le pasamos nuestra función que realiza la petición, para que internamente React Query la almacene en cache y cree los estados
  });

  return query;
};
