import React from "react";
import { Categories } from "@api/types/CategoriesTypes";
type IProps = {
    category: Categories;
    handleFilterCategory: (category: string) => void;
    isSelected: boolean;
};
declare const CategoriesCom: React.FC<IProps>;
export default CategoriesCom;
