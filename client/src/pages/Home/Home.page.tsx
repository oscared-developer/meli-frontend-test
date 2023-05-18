import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SearchBox } from "../../components";
import logoIcon from "../../assets/img/Logo_ML.png";
import Helmet from "react-helmet";
import "./Home.styles.scss";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    setSearchTerm("");
    navigate("/");
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchTerm(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`items?search=${searchTerm}`);
  };

  return (
    <>
      <Helmet>
        <title>Meli | Inicio</title>
        <meta name="description" content="pagina de inicio" />
      </Helmet>
      <header className="header">
        <div className="header__container">
          <span onClick={() => handleNavigate()}>
            <img
              className="header__container-logo"
              src={logoIcon}
              alt="ML logo"
            />
          </span>
          <SearchBox
            value={searchTerm}
            onChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
