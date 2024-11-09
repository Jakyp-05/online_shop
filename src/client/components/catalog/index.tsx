import React from "react";
import { Link } from "react-router-dom";

import useProduct from "@hooks/useProduct";
import useCategories from "@hooks/useCategories";
import useCategoryParoducts from "@hooks/useCategoryParoducts";
import { Categories } from "@api/types/CategoriesTypes";
import { Product } from "@api/types/productTypes";

import MenuButton from "../../ui/menuButton";

import CardSkeleton from "../cardSkeleton";
import Card from "../card";
import CategoriesCom from "../categories";
import Sort from "../sort";

const Catalog: React.FC = () => {
  const { products, status, error } = useProduct();
  const { categories } = useCategories();
  const {
    ref,
    categoryOpen,
    selectedCategory,
    handleFilterCategory,
    resetCategoryFilter,
    activeCategory,
  } = useCategoryParoducts();

  if (error) return <div>Error {error}</div>;

  return (
    <section className="catalog">
      <div className="container catalog__container">
        <div className="catalog__top">
          <div className="catalog__menu">
            <h2>Categories</h2>
            <div className="catalog__menu-burger">
              <MenuButton onclick={activeCategory} />
              <ul
                ref={ref}
                className={`menu__categories__mobile ${
                  categoryOpen ? "menu__categories__mobile__active" : ""
                }`}
              >
                <li>
                  <Link to="/catalog" onClick={resetCategoryFilter}>
                    All
                  </Link>
                </li>
                {categories.map((category: Categories, index: number) => (
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
          <div className="sort">
            <h2>Sort by</h2>
            <Sort />
          </div>
        </div>
        <div className="catalog__sidebar">
          <ul className="menu__categories">
            <li>
              <Link to="/catalog" onClick={resetCategoryFilter}>
                All
              </Link>
            </li>
            {categories.map((category: Categories, index: number) => (
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
            {products.map((item: Product) => (
              <Card key={item.id} item={item} isCatalog={true} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
