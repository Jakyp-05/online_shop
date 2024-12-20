import React from "react";

import { SortData } from "../../../shared/data/sort";
import useSort from "../../../hooks/useSort";

const SortByProducts: React.FC = () => {
  const { openSort, handleOpenSort, ref, handleSortClick } = useSort();

  return (
    <div className="sortBy">
      <div className="sortBy__top">
        <h4 className="sortBy__title" onClick={handleOpenSort}>
          Sort by: <span>Default</span>
        </h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
        </span>
      </div>
      {openSort && (
        <ul ref={ref} className="sortBy__content">
          {SortData.map((sort) => (
            <li key={sort.id} onClick={() => handleSortClick(sort.sortText)}>
              {sort.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortByProducts;
