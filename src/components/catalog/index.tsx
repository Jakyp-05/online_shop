import React from "react";
import useProduct from "../../hooks/useProduct";
import useCategories from "../../hooks/useCategories";

import CardSkeleton from "../cardSkeleton";
import Card from "../card";
import CategoriesCom from "../categories";
import { useAppDispatch } from "../../redux/store";
import { getProductsCategoryAction } from "../../redux/getProductCategory/action";

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useProduct();
  const { categories } = useCategories();

  if (error) return <div>Error {error}</div>;

  const handleFilterCategory = (category: string) => {
    console.log(category);
    dispatch(getProductsCategoryAction(category));
  };

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
              />
            ))}
          </ul>
          <ul className="card__list catalog_card-list">
            {status === "loading" && <CardSkeleton props={6} />}
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
