import { useState } from "react";
import { getProductsCategoryAction } from "../redux/getProductCategory/action";
import { useAppDispatch } from "../redux/store";

const useCategoryParoducts = () => {
  const dispatch = useAppDispatch();

  const [seletectedCategory, setSeletectedCategory] = useState<string>("");
  const handleFilterCategory = (category: string) => {
    setSeletectedCategory(category);
    dispatch(getProductsCategoryAction(category));
  };

  return { seletectedCategory, handleFilterCategory };
};

export default useCategoryParoducts;
