import React from "react";
import { Product } from "../../../interface";
import { useNavigate } from "react-router-dom";
import Button from "../../../ui/button";

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
          <Button
            role="View"
            bg="btn_view"
            onclick={() => handleNavigateId(item.id)}
          />
        </div>
        <span className="card__price">$ {item.price}</span>
        <p className="card__text">{item.description}</p>
        <div className="card__actions">
          <Button role="Add To Cart" bg="btn_cart" />
          <Button role="Buy Now" bg="btn_buy" />
        </div>
      </div>
    </li>
  );
};

export default Card;
