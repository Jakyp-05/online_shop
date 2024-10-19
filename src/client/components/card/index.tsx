import React from "react";
import { Product } from "../../interface";
import { useNavigate } from "react-router-dom";

type IProps = {
  item: Product;
  isCatalog?: boolean;
};

const Card: React.FC<IProps> = ({ item, isCatalog }) => {
  const navigate = useNavigate();

  const handleNavigateId = (id: number) => {
    navigate(isCatalog ? `/catalog/${id}` : `/${id}`);
  };

  return (
    <li className="card__item">
      <img
        className="card__image"
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
      />
      <div className="card__content">
        <div className="card__title">
          <h2>{item.title}</h2>
          <button
            className="btn btn_view"
            onClick={() => handleNavigateId(item.id)}
          >
            View
          </button>
        </div>
        <span className="card__price">$ {item.price}</span>
        <p className="card__text">{item.description}</p>
        <div className="card__actions">
          <button className="btn btn_cart">Add To Cart</button>
          <button className="btn btn_buy">Buy Now</button>
        </div>
      </div>
    </li>
  );
};

export default Card;
