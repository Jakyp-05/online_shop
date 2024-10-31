import React, { useState } from "react";
import useOutSideClick from "../../../hooks/useOutSideClick";

const CategoryProducts: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };

  const ref = useOutSideClick<HTMLUListElement>(() => {
    setOpenCategory(false);
  });
  return (
    <div className="category">
      <div className="category__top">
        <h4 className="category__title" onClick={handleOpenCategory}>
          Category: <span>All products</span>
        </h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
        </span>
      </div>
      {openCategory && (
        <ul ref={ref} className="category__content">
          <li>Beauty</li>
          <li>Fragrances</li>
          <li>Furniture</li>
          <li>Groceries</li>
          <li>Home Decoration</li>
          <li>Kitchen Accessories</li>
          <li>Laptops</li>
          <li>Mens Shirts</li>
          <li>Mens Shoes</li>
          <li>Mens Watches</li>
          <li>Mobile Accessories</li>
          <li>Motorcycle</li>
          <li>Skin Care</li>
          <li>Smartphones</li>
        </ul>
      )}
    </div>
  );
};

export default CategoryProducts;
