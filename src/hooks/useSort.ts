import { setSortBy } from "../redux/getProducts/slice";
import { getProductSortAction } from "../redux/getProductSort/action";
import { useAppDispatch } from "../redux/store";

const useSort = () => {
  const dispatch = useAppDispatch();
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

  return { handleSort };
};

export default useSort;
