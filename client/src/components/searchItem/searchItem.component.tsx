import { FC } from "react";
import shipping from "../../assets/img/ic_shipping.png";
import "./searchItem.styles.scss";
import { Item } from "../../interfaces/Item";

type Props = {
  item: Item;
  onClick: (id: string) => void;
};

export const SearchItem: FC<Props> = ({ item, onClick }) => {
  return (
    <div className="item" onClick={() => onClick(item.id)}>
      <div className="item__body">
        <div className="item__body-thumbnail">
          <img src={item.thumbnail} alt="imagen" />
        </div>
        <div>
          <div className="item__body-price">
            <p>${item.price.toLocaleString("es-AR")}</p>
            {item.shipping.free_shipping && (
              <img
                src={shipping}
                alt="shipping"
                className="item__price-shipping"
              />
            )}
          </div>
          <div className="item__body-title">
            <p>{item.title}</p>
          </div>
        </div>
      </div>
      <div className="item__address">
        <p>{item.address.state_name}</p>
      </div>
    </div>
  );
};
