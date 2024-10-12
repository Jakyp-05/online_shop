import React from "react";
import Card from "../card";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import CardSkeleton from "../cardSkeleton";

const Products: React.FC = () => {
  const { products, status, error } = useProduct();
  if (error) return <div>Error {error}</div>;
  
  return (
    <section className="products">
      <div className="container">
        <h2>Our Products</h2>
        <ul className="card__list">
          {status === "loading" && <CardSkeleton props={6} />}
          {products.slice(0, 6).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
        <Link to="/catalog" className="default-link default-link_top">
          View all products
        </Link>
      </div>
    </section>
  );
};

export default Products;
