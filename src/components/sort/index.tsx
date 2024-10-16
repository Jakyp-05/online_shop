import React from "react";

import useSort from "../../hooks/useSort";
import { SortData } from "../../data/sort";

const Sort: React.FC = () => {
  const { openSort, handleOpenSort, ref, handleSortClick } = useSort();

  return (
    <>
      <div className="sort__title" onClick={handleOpenSort}>
        Sort
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
        </span>
      </div>
      {openSort && (
        <ul ref={ref} className="sort__desc">
          {SortData.map((item) => (
            <li key={item.id} onClick={() => handleSortClick(item.sortText)}>
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sort;
