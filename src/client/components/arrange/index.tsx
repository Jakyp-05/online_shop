import React from "react";
import Total from "../total/Total";

const Arrange: React.FC = () => {
  return (
    <section className="arrange container">
      <h1>Оформить заказ</h1>
      <div className="arrange__boxs">
        <div className="arrange__content">
          <div className="arrange__personal">
            <div className="arrange__a1">
              <div className="arrange__number">1</div>
              <h3>Личные данные</h3>
            </div>
            <div className="arrange__inputs">
              <input type="text" placeholder="ФИО" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="email" />
              <input type="text" placeholder="City" />
            </div>
          </div>

          <div className="arrange__personal">
            <div className="arrange__a1">
              <div className="arrange__number">2</div>
              <h3>Доставка</h3>
            </div>
            <div className="arrange__radio">
              <div className="arrange__deli">
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="checkbox" />
                  <h4>Самовывоз</h4>
                </div>
                <p>
                  Вы можете забрать из нашего официального магазина по адресу
                  Бажана 8-Б, Киев, 02132 Украина
                </p>
              </div>
              <div className="arrange__deli">
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="checkbox" />
                  <h4>Курьер “Новая почта”</h4>
                </div>
                <p>
                  Вы можете забрать из нашего официального магазина по адресу
                  Бажана 8-Б, Киев, 02132 Украина
                </p>
              </div>
            </div>
          </div>

          <div className="arrange__personal">
            <div className="arrange__a1">
              <div className="arrange__number">3</div>
              <h3>Оплата</h3>
            </div>
            <div className="arrange__radio">
              <div className="arrange__deli">
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="checkbox" />
                  <h4>При получении</h4>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="checkbox" />
                  <h4>Онлайн-оплата картой</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Total />
      </div>
    </section>
  );
};

export default Arrange;
