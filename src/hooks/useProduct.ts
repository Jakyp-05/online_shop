import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAllProductsAction } from "../redux/getProducts/action";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return {
    product: product.products,
    status: product.status,
    error: product.error,
  };
};

export default useProduct;
