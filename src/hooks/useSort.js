import { useState } from "react";
import useOutSideClick from "@hooks/useOutSideClick";
import { setSortBy } from "@store/getProducts/slice";
import { getProductSortAction } from "@store/getProductSort/action";
import { useAppDispatch } from "@store/store";
const useSort = () => {
    const dispatch = useAppDispatch();
    const [openSort, setOpenSort] = useState(false);
    const handleSort = (sortValue) => {
        const [newSortBy, newOrder] = sortValue.split("-");
        dispatch(setSortBy({ sortBy: newSortBy, order: newOrder }));
        dispatch(getProductSortAction({
            sortBy: newSortBy,
            order: newOrder,
        }));
    };
    const handleOpenSort = () => {
        setOpenSort(!openSort);
    };
    const ref = useOutSideClick(() => {
        setOpenSort(false);
    });
    const handleSortClick = (sortValue) => {
        handleSort(sortValue);
        setOpenSort(false);
    };
    return { openSort, handleSort, handleOpenSort, ref, handleSortClick };
};
export default useSort;
