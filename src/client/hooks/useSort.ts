import { useState } from "react";

import useOutSideClick from "../../hooks/useOutSideClick";

import { setSortBy } from "../store/getProducts/slice";
import { getProductSortAction } from "../store/getProductSort/action";
import { useAppDispatch } from "../../store/store";

const useSort = () => {
  const dispatch = useAppDispatch();
  const [openSort, setOpenSort] = useState<boolean>(false);

  const handleSort = (sortValue: string) => {
    const [newSortBy, newOrder] = sortValue.split("-");
    dispatch(
      setSortBy({ sortBy: newSortBy, order: newOrder as "asc" | "desc" })
    );
    dispatch(
      getProductSortAction({
        sortBy: newSortBy,
        order: newOrder as "asc" | "desc",
      })
    );
  };

  const handleOpenSort = () => {
    setOpenSort(!openSort);
  };

  const ref = useOutSideClick<HTMLUListElement>(() => {
    setOpenSort(false);
  });

  const handleSortClick = (sortValue: string) => {
    handleSort(sortValue);
    setOpenSort(false);
  };

  return { openSort, handleSort, handleOpenSort, ref, handleSortClick };
};

export default useSort;
