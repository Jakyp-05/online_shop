import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAllCategoriesAction } from "../redux/getAllCategories/action";

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
