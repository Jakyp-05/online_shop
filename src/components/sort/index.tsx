import React, { useState } from "react";
import useSort from "../../hooks/useSort";

const Sort: React.FC = () => {
  const [openSort, setOpenSort] = useState<boolean>(false);
  const { handleSort } = useSort();

  const handleOpenSort = () => {
    setOpenSort(!openSort);
  };

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
        <ul className="sort__desc">
          <li onClick={() => handleSort("name-asc")}>A to Z</li>
          <li onClick={() => handleSort("name-desc")}>Z to A</li>
          <li onClick={() => handleSort("price-asc")}>low to high</li>
          <li onClick={() => handleSort("price-desc")}>high to low</li>
        </ul>
      )}
    </>
  );
};

export default Sort;
