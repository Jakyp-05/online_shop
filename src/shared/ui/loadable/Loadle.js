import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
const Loadle = ({ factory }) => {
    const Component = lazy(factory);
    return (_jsx(Suspense, { fallback: _jsx("p", { children: "Loading..." }), children: _jsx(Component, {}) }));
};
export default Loadle;
