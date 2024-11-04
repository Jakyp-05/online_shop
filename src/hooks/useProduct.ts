import { useEffect } from "react";
import { getAllProductsAction } from "../store/getProducts/action";
import { getProductSortAction } from "../store/getProductSort/action";
import { useAppDispatch, useAppSelector } from "../store/store";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const { products, status, error, sortBy, order } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(getAllProductsAction());
    dispatch(getProductSortAction({ sortBy, order }));
  }, [dispatch, sortBy, order]);

  return {
    products,
    status,
    error,
  };
};

export default useProduct;
