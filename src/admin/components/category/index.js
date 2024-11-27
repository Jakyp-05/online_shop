import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useAdminCategory from "@/admin/hooks/useAdminCategory";
const CategoryProducts = () => {
    const { openCategory, selectedCategory, categories, handleOpenCategory, handleCategorySelect, ref, resetCategoryFilter, } = useAdminCategory();
    return (_jsxs("div", { className: "category", children: [_jsxs("div", { className: "category__top", children: [_jsxs("h4", { className: "category__title", onClick: handleOpenCategory, children: ["Category: ", _jsx("span", { children: selectedCategory })] }), _jsx("span", { children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", children: _jsx("path", { d: "M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" }) }) })] }), openCategory && (_jsxs("ul", { ref: ref, className: "category__content", children: [_jsx("li", { onClick: () => resetCategoryFilter(), children: "All products" }), categories.map((cat, index) => (_jsx("li", { onClick: () => handleCategorySelect(cat.name), children: cat.name }, index)))] }))] }));
};
export default CategoryProducts;
