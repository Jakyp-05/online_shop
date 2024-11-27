import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import useProduct from "@hooks/useProduct";
import Card from "../card";
import CardSkeleton from "../cardSkeleton";
const Products = () => {
    const { products, status, error } = useProduct();
    if (error)
        return _jsxs("div", { children: ["Error ", error] });
    return (_jsx("section", { className: "products", children: _jsxs("div", { className: "container", children: [_jsx("h2", { children: "Our Products" }), _jsxs("ul", { className: "card__list", children: [status === "loading" && _jsx(CardSkeleton, { props: 6 }), products.slice(0, 6).map((item) => (_jsx(Card, { item: item }, item.id)))] }), _jsx(Link, { to: "/catalog", className: "default-link default-link_top", children: "View all products" })] }) }));
};
export default Products;
