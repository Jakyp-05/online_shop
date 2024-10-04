import React from "react";
import { Product } from "../../interface";

type IProps = {
  item: Product;
};

const Card: React.FC<IProps> = ({ item }) => {
  return (
    <li className="card__item">
      <img
        className="card__image"
        src={
          Array.isArray(item.images) && item.images.length > 0
            ? item.images[0]
            : "/path/to/placeholder-image.jpg"
        }
        alt={item.title}
        loading="lazy"
      />
      <div className="card__content">
        <div className="card__title">
          <h2>{item.title}</h2>
          <button className="btn btn_view">View details</button>
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
