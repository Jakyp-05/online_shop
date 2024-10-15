import { useEffect, useState } from "react";
import { getProductsCategoryAction } from "../redux/getProductCategory/action";
import { useAppDispatch } from "../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProductsAction } from "../redux/getProducts/action";

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

  const resetCategoryFilter = () => {
    setSelectedCategory("");
    navigate("/catalog", { replace: true });
    dispatch(getAllProductsAction());
  };

  return { selectedCategory, handleFilterCategory, resetCategoryFilter };
};

export default useCategoryParoducts;
