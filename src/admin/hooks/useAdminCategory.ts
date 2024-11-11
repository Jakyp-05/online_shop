import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useCategories from "@/hooks/useCategories";
import useOutSideClick from "@/hooks/useOutSideClick";
import { getProductsCategoryAction } from "@/store/getProductCategory/action";
import { getAllProductsAction } from "@/store/getProducts/action";
import { useAppDispatch } from "@/store/store";

const useAdminCategory = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { category } = useParams<{ category?: string }>();

  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All products");

  const { categories } = useCategories();

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      dispatch(getProductsCategoryAction(category));
    }
  }, [category, dispatch]);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setOpenCategory(false);
    navigate(`/admin/products/category/${categoryName}`, { replace: true });
    dispatch(getProductsCategoryAction(categoryName));
  };

  const ref = useOutSideClick<HTMLUListElement>(() => {
    setOpenCategory(false);
  });

  const resetCategoryFilter = () => {
    setSelectedCategory("");
    navigate("/admin/products", { replace: true });
    dispatch(getAllProductsAction());
  };
  return {
    openCategory,
    selectedCategory,
    categories,
    handleOpenCategory,
    handleCategorySelect,
    ref,
    resetCategoryFilter,
  };
};

export default useAdminCategory;
