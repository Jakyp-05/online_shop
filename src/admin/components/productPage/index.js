import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Button from "@shared/ui/button";
import useProduct from "@hooks/useProduct";
import SortByProducts from "../sortBy";
import CategoryProducts from "../category";
const ProductPage = () => {
    const { products, status, error } = useProduct();
    if (error)
        return _jsxs("div", { children: ["Error: ", error] });
    if (status === "loading")
        return _jsx("div", { children: "Loading..." });
    return (_jsxs("section", { className: "product-page", children: [_jsxs("div", { className: "product__top", children: [_jsx("input", { type: "text", placeholder: "Search product" }), _jsx(CategoryProducts, {}), _jsx(SortByProducts, {}), _jsx(Button, { role: "+ Add Product", bg: "btn_add" })] }), _jsx("div", { className: "product__content", children: _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Product name" }), _jsx("th", { children: "Purchase Unit Price" }), _jsx("th", { children: "Rating" }), _jsx("th", { children: "Action" })] }) }), _jsx("tbody", { children: products.slice(0, 5).map((el) => (_jsxs("tr", { children: [_jsxs("td", { className: "product__table_content", children: [_jsx("img", { src: el.thumbnail, alt: el.title }), _jsxs("div", { className: "product__table_content_table_title", children: [_jsx("h4", { children: el.title }), _jsxs("p", { children: ["SKU: ", _jsx("span", { children: el.sku })] })] })] }), _jsxs("td", { children: [el.price, " $"] }), _jsx("td", { children: _jsx("span", { className: el?.rating !== undefined && el.rating < 4
                                                ? "rating-minus"
                                                : "rating-plus", children: el.rating ?? 0 }) }), _jsxs("td", { children: [_jsx(Button, { role: "Edit", bg: "btn_edit" }), _jsx(Button, { role: "Edit", bg: "btn_delete" })] })] }))) })] }) })] }));
};
export default ProductPage;
