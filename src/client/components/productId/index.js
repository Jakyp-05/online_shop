import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Button from "@shared/ui/button";
import useProductId from "@hooks/useProductId";
import { useLocation } from "react-router-dom";
const ProductId = () => {
    const location = useLocation();
    const isCatalog = location.pathname.includes("/catalog");
    const { product, error, handleCloseRoute } = useProductId(isCatalog);
    const hasImages = Array.isArray(product?.images) && product.images.length > 0;
    const imageUrl = hasImages
        ? product.images[0]
        : "/path/to/placeholder-image.jpg";
    if (error)
        return _jsxs("span", { children: ["Error:", error] });
    return (_jsx("section", { className: "productId", children: _jsxs("div", { className: "container productId__container", children: [_jsxs("div", { className: "productId__content", children: [_jsxs("div", { className: "productId__content__top", children: [_jsx("h2", { children: product?.title }), product?.brand && _jsx("strong", { children: product?.brand }), _jsxs("div", { className: "prodcustId__rating-reviews", children: [_jsx("span", { className: product?.rating !== undefined && product.rating < 4
                                                ? "rating-minus"
                                                : "rating-plus", children: product?.rating ?? 0 }), _jsxs("a", { href: "#", children: ["(", product?.reviews?.length ?? 0, ") Reviews"] })] }), _jsxs("p", { children: ["SKU:", _jsxs("span", { children: [" #", product?.sku] })] })] }), _jsxs("div", { className: "productId__content__bottom", children: [_jsxs("div", { className: "productId__price-discount", children: [_jsxs("p", { children: ["$ ", product?.price] }), _jsxs("span", { children: ["- ", product?.discountPercentage, " %"] })] }), _jsx("p", { children: product?.description }), _jsxs("div", { className: "productId__size", children: [_jsxs("p", { children: ["width: ", _jsx("span", { children: product?.dimensions.width })] }), _jsxs("p", { children: ["height: ", _jsx("span", { children: product?.dimensions.height })] }), _jsxs("p", { children: ["depth: ", _jsx("span", { children: product?.dimensions.depth })] })] }), _jsxs("div", { className: "productId__btns", children: [_jsx(Button, { role: "Add To Cart", bg: "btn_cart" }), _jsx(Button, { role: "Close", bg: "btn_close", onclick: handleCloseRoute })] })] })] }), _jsx("div", { className: "productId__image", children: _jsx("img", { src: imageUrl, alt: product?.title, loading: "lazy" }) })] }) }));
};
export default ProductId;
