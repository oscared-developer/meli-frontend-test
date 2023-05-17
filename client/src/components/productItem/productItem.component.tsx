import { FC } from "react";
import { Product, ProductDescription } from "../../interfaces/Produc";
import "./productItem.styles.scss";

type Props = {
  details: Product;
  description: ProductDescription;
};

export const ProductItem: FC<Props> = ({ details, description }) => {
  return (
    <>
      <div className="productItem__details">
        <div className="productItem__image">
          <img src={details?.pictures[0]?.url} />
        </div>
        <div className="productItem__info">
          <span className="productItem__condition">
            <p>
              {details?.condition} - {details?.sold_quantity} vendidos
            </p>
          </span>
          <p className="productItem__title">{details?.title}</p>
          <p className="productItem__price">${details?.price}</p>
          <button className="productItem__checkout_button">comprar</button>
        </div>
      </div>
      <div className="productItem__description">
        <p className="productItem__description_title">
          Descripción del producto
        </p>
        <p className="productItem__description_text">
          {description?.plain_text}
        </p>
      </div>
    </>
  );
};
