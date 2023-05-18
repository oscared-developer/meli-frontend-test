import { FC } from "react";
import searchIcon from "../../assets/img/ic_Search.png";
import "./searchBox.styles.scss";

type Props = {
  value: string | undefined;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchBox: FC<Props> = ({ value, onChange, handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="form__group">
        <input
          value={value}
          placeholder="Nunca dejes de buscar"
          onChange={onChange}
        />
        <button type="button">
          <img src={searchIcon} alt="search" />
        </button>
      </span>
    </form>
  );
};
