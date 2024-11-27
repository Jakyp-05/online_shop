import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SortData } from "@shared/data/sort";
import useSort from "@/hooks/useSort";
const SortByProducts = () => {
    const { openSort, handleOpenSort, ref, handleSortClick } = useSort();
    return (_jsxs("div", { className: "sortBy", children: [_jsxs("div", { className: "sortBy__top", children: [_jsxs("h4", { className: "sortBy__title", onClick: handleOpenSort, children: ["Sort by: ", _jsx("span", { children: "Default" })] }), _jsx("span", { children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", children: _jsx("path", { d: "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" }) }) })] }), openSort && (_jsx("ul", { ref: ref, className: "sortBy__content", children: SortData.map((sort) => (_jsx("li", { onClick: () => handleSortClick(sort.sortText), children: sort.text }, sort.id))) }))] }));
};
export default SortByProducts;
