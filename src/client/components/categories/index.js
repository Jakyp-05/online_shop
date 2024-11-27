import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
const CategoriesCom = ({ category, handleFilterCategory, }) => {
    return (_jsx(React.Fragment, { children: _jsx("li", { onClick: () => handleFilterCategory(category.name), children: category.name }) }));
};
export default CategoriesCom;
