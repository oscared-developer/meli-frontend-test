import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router } from "./router";
import "./styles/index.scss";

/**
 *  Declaramos el cliente de React Query y envolvemos nuestra app en el QueryProvider
 *
 *  Porque React Query ?
 *    por que es una herrmaienta que nos facilita realizar las peticiones hacia nuestro servidor, brindandonos
 *    distintas herramientas como cache y distintos hooks para trabajar con el resultado de nuestras
 *    peticiones de forma sencilla en nuestros componentes
 */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // evitamos realizar la peticion cada que se hace focus en la pestaña del navegar , ya que por el momento no es necesario
      retry: 0, // por defecto si ocurrey un error en nuestras peticiones React Query intenta 3 veces y luego nos regresa el error, aqui le decimos que solo intente una vez
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      {/* Agregamos las React Query Tools , estas se desactivan automaticamente en modo produccion, asi que no hace falta ninguna configuracion */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
