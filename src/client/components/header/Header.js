import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Header = () => {
    return (_jsx("header", { className: "header", children: _jsxs("div", { className: "container header__container", children: [_jsxs("div", { className: "header__menu-first", children: [_jsx(Link, { to: "/", children: "Logo" }), _jsx("nav", { className: "menu", children: _jsxs("ul", { className: "menu__list", children: [_jsx("li", { className: "menu__item", children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx("li", { className: "menu__item", children: _jsx(Link, { to: "/catalog", children: "Catalog" }) })] }) })] }), _jsxs("div", { className: "header__actions", children: [_jsx("div", { className: "header__cart", children: _jsx(Link, { to: "/basket", children: "My Cart: (1)" }) }), _jsx("div", { className: "header__login", children: _jsx(Link, { to: "/login", children: "Login" }) }), _jsx("div", { className: "header__login", children: _jsx(Link, { to: "/Register", children: "Register" }) })] })] }) }));
};
export default Header;
