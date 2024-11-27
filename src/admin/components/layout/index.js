import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/index";
import Header from "../header";
const Layout = () => {
    return (_jsxs("div", { className: "admin-container", children: [_jsx(Header, {}), _jsxs("section", { className: "layout", children: [_jsx(Sidebar, {}), _jsx("div", { className: "layout__content", children: _jsx("div", { className: "layout__result", children: _jsx(Outlet, {}) }) })] })] }));
};
export default Layout;
