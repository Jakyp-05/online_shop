import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import useSort from "@hooks/useSort";
import { SortData } from "@shared/data/sort";
const Sort = () => {
    const { openSort, handleOpenSort, ref, handleSortClick } = useSort();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "sort__title", onClick: handleOpenSort, children: ["Sort", _jsx("span", { children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: _jsx("path", { d: "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" }) }) })] }), openSort && (_jsx("ul", { ref: ref, className: "sort__desc", children: SortData.map((item) => (_jsx("li", { onClick: () => handleSortClick(item.sortText), children: item.text }, item.id))) }))] }));
};
export default Sort;
