import React from "react";
import { Categories } from "../../interface";

type IProps = {
  category: Categories;
  handleFilterCategory: (category: string) => void;
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
