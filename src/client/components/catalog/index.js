import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import useProduct from "@hooks/useProduct";
import useCategories from "@hooks/useCategories";
import useCategoryParoducts from "@hooks/useCategoryParoducts";
import MenuButton from "../../ui/menuButton";
import CardSkeleton from "../cardSkeleton";
import Card from "../card";
import CategoriesCom from "../categories";
import Sort from "../sort";
const Catalog = () => {
    const { products, status, error } = useProduct();
    const { categories } = useCategories();
    const { ref, categoryOpen, selectedCategory, handleFilterCategory, resetCategoryFilter, activeCategory, } = useCategoryParoducts();
    if (error)
        return _jsxs("div", { children: ["Error ", error] });
    return (_jsx("section", { className: "catalog", children: _jsxs("div", { className: "container catalog__container", children: [_jsxs("div", { className: "catalog__top", children: [_jsxs("div", { className: "catalog__menu", children: [_jsx("h2", { children: "Categories" }), _jsxs("div", { className: "catalog__menu-burger", children: [_jsx(MenuButton, { onclick: activeCategory }), _jsxs("ul", { ref: ref, className: `menu__categories__mobile ${categoryOpen ? "menu__categories__mobile__active" : ""}`, children: [_jsx("li", { children: _jsx(Link, { to: "/catalog", onClick: resetCategoryFilter, children: "All" }) }), categories.map((category, index) => (_jsx(CategoriesCom, { category: category, handleFilterCategory: handleFilterCategory, isSelected: category.name === selectedCategory }, index)))] })] })] }), _jsxs("div", { className: "sort", children: [_jsx("h2", { children: "Sort by" }), _jsx(Sort, {})] })] }), _jsxs("div", { className: "catalog__sidebar", children: [_jsxs("ul", { className: "menu__categories", children: [_jsx("li", { children: _jsx(Link, { to: "/catalog", onClick: resetCategoryFilter, children: "All" }) }), categories.map((category, index) => (_jsx(CategoriesCom, { category: category, handleFilterCategory: handleFilterCategory, isSelected: category.name === selectedCategory }, index)))] }), _jsxs("ul", { className: "card__list catalog_card-list", children: [status === "loading" && _jsx(CardSkeleton, { props: 6 }), products.length === 0 && status === "succeeded" && (_jsx("div", { children: "\u0422\u043E\u0432\u0430\u0440\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B" })), products.map((item) => (_jsx(Card, { item: item, isCatalog: true }, item.id)))] })] })] }) }));
};
export default Catalog;
