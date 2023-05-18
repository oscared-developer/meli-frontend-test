import { FC } from "react";
import "./errorWrapper.styles.scss";

type Props = {
  children: JSX.Element;
};

export const ErrorWrapper: FC<Props> = ({ children }) => {
  return <div className="error-wrapper">{children}</div>;
};
