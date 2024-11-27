import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import Button from "@shared/ui/button";
const Card = ({ item, isCatalog }) => {
    const navigate = useNavigate();
    const handleNavigateId = (id) => {
        navigate(isCatalog ? `/catalog/${id}` : `/${id}`);
    };
    return (_jsxs("li", { className: "card__item", children: [_jsx("img", { className: "card__image", src: item.thumbnail, alt: item.title, loading: "lazy" }), _jsxs("div", { className: "card__content", children: [_jsxs("div", { className: "card__title", children: [_jsx("h2", { children: item.title }), _jsx(Button, { role: "View", bg: "btn_view", onclick: () => handleNavigateId(item.id) })] }), _jsxs("span", { className: "card__price", children: ["$ ", item.price] }), _jsx("p", { className: "card__text", children: item.description }), _jsxs("div", { className: "card__actions", children: [_jsx(Button, { role: "Add To Cart", bg: "btn_cart" }), _jsx(Button, { role: "Buy Now", bg: "btn_buy" })] })] })] }));
};
export default Card;
