import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { SidebarData } from "../../data/sidebar";
const Sidebar = () => {
    return (_jsxs("section", { className: "sidebar", children: [_jsx(Link, { to: "/admin/home", children: "Logo" }), _jsx("ul", { className: "sidebar__menu", children: SidebarData.map((el) => (_jsx("li", { children: _jsx(Link, { to: el.menuLink, children: el.menuText }) }, el.id))) })] }));
};
export default Sidebar;
