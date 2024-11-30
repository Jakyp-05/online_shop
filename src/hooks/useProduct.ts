import { useEffect } from "react";
import { getAllProductsAction } from "../store/getProducts/action";
import { getProductSortAction } from "../store/getProductSort/action";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getProductpaginationAction } from "store/pagination/action";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const { products, status, error, sortBy, order, total, limit, skip } =
    useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductsAction());
    dispatch(getProductSortAction({ sortBy, order }));
    dispatch(getProductpaginationAction({ limit, skip }));
  }, [dispatch, sortBy, order]);

  return {
    products,
    status,
    error,
    total
  };
};

export default useProduct;
