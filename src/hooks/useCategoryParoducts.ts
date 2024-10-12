import { useEffect, useState } from "react";
import { getProductsCategoryAction } from "../redux/getProductCategory/action";
import { useAppDispatch } from "../redux/store";
import { useNavigate, useParams } from "react-router-dom";

const useCategoryParoducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { category } = useParams<{ category?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      dispatch(getProductsCategoryAction(category));
    }
  }, [category, dispatch]);

  const handleFilterCategory = (newCategory: string) => {
    if (newCategory !== selectedCategory) {
      setSelectedCategory(newCategory);
      navigate(`/catalog/categories/${newCategory}`, { replace: true });
      dispatch(getProductsCategoryAction(newCategory));
    }
  };

  return { selectedCategory, handleFilterCategory };
};

export default useCategoryParoducts;
