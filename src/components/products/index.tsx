import React from "react";
import Card from "../card";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  return (
    <section className="products">
      <div className="container">
        <h2>Our Products</h2>
        <ul className="card__list">
          <Card />
        </ul>
        <Link to="/catalog" className="default-link default-link_top">View all products</Link>
      </div>
    </section>
  );
};

export default Products;
