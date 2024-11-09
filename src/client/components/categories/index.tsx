import React from "react";
import { Categories } from "@api/types/CategoriesTypes";

type IProps = {
  category: Categories;
  handleFilterCategory: (category: string) => void;
  isSelected: boolean;
};

const CategoriesCom: React.FC<IProps> = ({
  category,
  handleFilterCategory,
}) => {
  return (
    <React.Fragment>
      <li onClick={() => handleFilterCategory(category.name)}>
        {category.name}
      </li>
    </React.Fragment>
  );
};

export default CategoriesCom;
