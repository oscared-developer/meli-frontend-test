import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SearchBox } from "../../components";
import logoIcon from "../../assets/img/Logo_ML.png";
import "./Home.styles.scss";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
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
      <header className="header">
        <div className="header__container">
          <span onClick={() => handleNavigate()}>
            <img className="header__logo" src={logoIcon} alt="ML logo" />
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
