import React from "react";
import useAdminCategory from "../../hooks/useAdminCategory";

const CategoryProducts: React.FC = () => {
  const {
    openCategory,
    selectedCategory,
    categories,
    handleOpenCategory,
    handleCategorySelect,
    ref,
    resetCategoryFilter,
  } = useAdminCategory();

  return (
    <div className="category">
      <div className="category__top">
        <h4 className="category__title" onClick={handleOpenCategory}>
          Category: <span>{selectedCategory}</span>
        </h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
        </span>
      </div>
      {openCategory && (
        <ul ref={ref} className="category__content">
          <li onClick={() => resetCategoryFilter()}>All products</li>
          {categories.map((cat: any, index: any) => (
            <li key={index} onClick={() => handleCategorySelect(cat.name)}>
              {cat.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryProducts;
