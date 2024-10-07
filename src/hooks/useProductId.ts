import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getIdProductAction } from "../redux/getProductId/action";

const useProductId = () => {
  const { id } = useParams<{ id: string }>();
  const { product, status, error } = useAppSelector((state) => state.productId);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getIdProductAction(Number(id)));
    }
  }, [id, dispatch]);

  return { product, status, error };
};

export default useProductId;
