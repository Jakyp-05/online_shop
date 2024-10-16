import { useState } from "react";
import { setSortBy } from "../redux/getProducts/slice";
import { getProductSortAction } from "../redux/getProductSort/action";
import { useAppDispatch } from "../redux/store";
import useOutSideClick from "./useOutSideClick";

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
