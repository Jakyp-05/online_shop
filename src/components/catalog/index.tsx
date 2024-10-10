import React from "react";
import useProduct from "../../hooks/useProduct";
import useCategories from "../../hooks/useCategories";

import CardSkeleton from "../cardSkeleton";
import Card from "../card";
import CategoriesCom from "../categories";
import useCategoryParoducts from "../../hooks/useCategoryParoducts";

const Catalog: React.FC = () => {
  const { products, status, error } = useProduct();
  const { categories } = useCategories();
  const { seletectedCategory, handleFilterCategory } = useCategoryParoducts();

  if (error) return <div>Error {error}</div>;

  return (
    <section className="catalog">
      <div className="container catalog__container">
        <div className="catalog__top">
          <h2>Categories</h2>
          <h2>Sort by</h2>
        </div>
        <div className="catalog__sidebar">
          <ul className="menu__categories">
            {categories.map((category, index) => (
              <CategoriesCom
                key={index}
                category={category}
                handleFilterCategory={handleFilterCategory}
                isSelected={category.name === seletectedCategory}
              />
            ))}
          </ul>
          <ul className="card__list catalog_card-list">
            {status === "loading" && <CardSkeleton props={6} />}
            {products.length === 0 && status === "succeeded" && (
              <div>Товары не найдены</div>
            )}
            {products.map((item) => (
              <Card key={item.id} item={item} isCatalog={true} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
