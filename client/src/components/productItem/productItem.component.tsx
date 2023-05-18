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
      <div className="product">
        <div className="product__image">
          <img src={details?.pictures[0]?.url} alt="product image" />
        </div>
        <div className="product__info">
          <span className="product__info-condition">
            <p>
              {details?.condition === "new" ? "Nuevo " : "Usado "} -{" "}
              {details?.sold_quantity} vendidos
            </p>
          </span>
          <p className="product__info-title">{details?.title}</p>
          <p className="product__info-price">
            ${details?.price.toLocaleString("es-AR")}
          </p>
          <button className="product__info-checkout">comprar</button>
        </div>
      </div>
      <div className="product__description">
        <p className="product__description-title">Descripción del producto</p>
        <p className="product__description-text">{description?.plain_text}</p>
      </div>
    </>
  );
};
