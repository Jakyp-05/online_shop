import { useEffect, useState } from "react";
import { getProductsCategoryAction } from "../redux/getProductCategory/action";
import { useAppDispatch } from "../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProductsAction } from "../redux/getProducts/action";
import useOutSideClick from "./useOutSideClick";

const useCategoryParoducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { category } = useParams<{ category?: string }>();
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
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
      setCategoryOpen(false);
    }
  };

  const resetCategoryFilter = () => {
    setSelectedCategory("");
    navigate("/catalog", { replace: true });
    dispatch(getAllProductsAction());
    setCategoryOpen(false);
  };

  const activeCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const ref = useOutSideClick<HTMLUListElement>(() => {
    setCategoryOpen(false);
  });

  return {
    ref,
    categoryOpen,
    activeCategory,
    selectedCategory,
    handleFilterCategory,
    resetCategoryFilter,
  };
};

export default useCategoryParoducts;
