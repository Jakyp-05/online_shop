import React, { useState } from "react";
import useProduct from "../../hooks/useProduct";
import useCategories from "../../hooks/useCategories";

import CardSkeleton from "../cardSkeleton";
import Card from "../card";
import CategoriesCom from "../categories";
import useCategoryParoducts from "../../hooks/useCategoryParoducts";
import { Link } from "react-router-dom";
import MenuButton from "../../ui/menuButton";

const Catalog: React.FC = () => {
  const { products, status, error } = useProduct();
  const { categories } = useCategories();
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const { selectedCategory, handleFilterCategory } = useCategoryParoducts();

  if (error) return <div>Error {error}</div>;

  const activeCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  return (
    <section className="catalog">
      <div className="container catalog__container">
        <div className="catalog__top">
          <div className="catalog__menu">
            <h2>Categories</h2>
            <div className="catalog__menu-burger">
              <MenuButton onclick={activeCategory} />
              <ul
                className={`menu__categories__mobile ${
                  categoryOpen ? "menu__categories__mobile__active" : ""
                }`}
              >
                <li>
                  <Link to="/catalog">All</Link>
                </li>
                {categories.map((category, index) => (
                  <CategoriesCom
                    key={index}
                    category={category}
                    handleFilterCategory={handleFilterCategory}
                    isSelected={category.name === selectedCategory}
                  />
                ))}
              </ul>
            </div>
          </div>
          <h2>Sort by</h2>
        </div>
        <div className="catalog__sidebar">
          <ul className="menu__categories">
            <li>
              <Link to="/catalog">All</Link>
            </li>
            {categories.map((category, index) => (
              <CategoriesCom
                key={index}
                category={category}
                handleFilterCategory={handleFilterCategory}
                isSelected={category.name === selectedCategory}
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
