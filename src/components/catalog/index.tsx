import React from "react";
import useProduct from "../../hooks/useProduct";
import CardSkeleton from "../cardSkeleton";
import Card from "../card";

const Catalog: React.FC = () => {
  const { product, status, error } = useProduct();
  if (error) return <div>Error {error}</div>;
  return (
    <section className="catalog">
      <div className="container catalog__container">
        <div className="catalog__top">
          <h2>Categories</h2>
          <h2>Sort by</h2>
        </div>
        <div className="catalog__sidebar">
          <div className="menu__categories">Categories</div>
          <ul className="card__list catalog_card-list">
            {status === "loading" && <CardSkeleton props={6} />}
            {product.map((item) => (
              <Card key={item.id} item={item} isCatalog={true}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
