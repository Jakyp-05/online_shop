import { useEffect } from "react";
import { getAllCategoriesAction } from "../store/getAllCategories/action";
import { useAppDispatch, useAppSelector } from "../../store/store";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { categories, status, error } = useAppSelector(
    (state) => state.client.categories
  );
  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  return { categories, status, error };
};

export default useCategories;
