import React from "react";
import { Categories } from "../../interface";

type IProps = {
  category: Categories;
  handleFilterCategory: (category: string) => void;
  isSelected: boolean;
};

const CategoriesCom: React.FC<IProps> = ({
  category,
  handleFilterCategory,
  isSelected,
}) => {
  return (
    <React.Fragment>
      <li
        onClick={() => handleFilterCategory(category.name)}
        className={isSelected ? "active" : ""}
      >
        {category.name}
      </li>
    </React.Fragment>
  );
};

export default CategoriesCom;
