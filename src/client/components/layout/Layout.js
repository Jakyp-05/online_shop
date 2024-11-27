import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
const Layout = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Outlet, {})] }));
};
export default Layout;
