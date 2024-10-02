import React from "react";
import Card from "../card";

const Products: React.FC = () => {
  return (
    <section className="products">
      <div className="container">
        <h2>Our Products</h2>
        <ul className="card__list">
          <Card />
        </ul>
        <button className="btn btn_product">View all products</button>
      </div>
    </section>
  );
};

export default Products;
