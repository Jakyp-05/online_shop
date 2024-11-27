import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const Total: React.FC = () => {
  return (
    <section className="total">
      <div className="total__content">
        <div className="total__btns">
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80"
            alt=""
          />
          <div className="total__a1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              magni?
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>1шт</span>
              <span style={{ color: "red" }}>500 $</span>
            </div>
          </div>
        </div>
        <div className="total__btns">
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80"
            alt=""
          />
          <div className="total__a1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              magni?
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>1шт</span>
              <span style={{ color: "red" }}>500 $</span>
            </div>
          </div>
        </div>
        <div className="total__btns">
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80"
            alt=""
          />
          <div className="total__a1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              magni?
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>1шт</span>
              <span style={{ color: "red" }}>500 $</span>
            </div>
          </div>
        </div>
      </div>
      <div className="total__block">
        <div className="total__inputs">
          <input type="text" placeholder="Введите прокод" />
          <button>Применить</button>
        </div>
        <div className="total__text">
          <h2>Итого</h2>
          <span>10 953 $</span>
        </div>
        <div className="total__buttons">
          <div className="total__delivery">
            <TbTruckDelivery className="total__icon" />
            <p>У вас бесплатная доставка!</p>
          </div>
          <button className="total__button">Оформить заказ</button>
        </div>
      </div>
    </section>
  );
};

export default Total;
