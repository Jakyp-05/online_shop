import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getAllCategoriesAction } from "../store/getAllCategories/action";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { categories, status, error } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  return { categories, status, error };
};

export default useCategories;
