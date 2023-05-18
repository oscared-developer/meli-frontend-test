import { Link } from "react-router-dom";
import "./NotFound.styles.scss";
import { ErrorWrapper } from "../../components";

const NotFound = () => {
  return (
    <ErrorWrapper>
      <>
        <h1 className="not-found__logo">404</h1>
        <h2>Opps!, Parece que algo salio mal</h2>
        <Link className="not-found__button" to="/">
          Volver al Inicio
        </Link>
      </>
    </ErrorWrapper>
  );
};

export default NotFound;
