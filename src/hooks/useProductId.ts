import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getIdProductAction } from "../store/getProductId/action";
import { useAppDispatch, useAppSelector } from "../store/store";

const useProductId = (isCatalog?: boolean) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, status, error } = useAppSelector(
    (state) => state.productId
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getIdProductAction(Number(id)));
    }
  }, [id, dispatch]);

  const handleCloseRoute = () => {
    navigate(isCatalog ? "/catalog" : "/");
  };

  return { product, status, error, handleCloseRoute };
};

export default useProductId;
