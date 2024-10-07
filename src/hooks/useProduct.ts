import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAllProductsAction } from "../redux/getProducts/action";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return {
    product: product.products,
    status: product.status,
    error: product.error,
  };
};

export default useProduct;
