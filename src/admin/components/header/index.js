import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Header = () => {
    return (_jsxs("header", { className: "admin-header", children: [_jsx("div", { className: "admin-header__first", children: _jsx(Link, { to: "/admin/home", children: "Logo" }) }), _jsxs("div", { className: "profile", children: [_jsx("img", { className: "profile__image", src: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg", alt: "profile image" }), _jsx("span", { children: "emilys" })] })] }));
};
export default Header;
