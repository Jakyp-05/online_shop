import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useOutSideClick from "../hooks/useOutSideClick";
import { getProductsCategoryAction } from "../store/getProductCategory/action";
import { getAllProductsAction } from "../store/getProducts/action";
import { useAppDispatch } from "../store/store";
const useCategoryParoducts = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { category } = useParams();
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    useEffect(() => {
        if (category) {
            setSelectedCategory(category);
            dispatch(getProductsCategoryAction(category));
        }
    }, [category, dispatch]);
    const handleFilterCategory = (newCategory) => {
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
    const ref = useOutSideClick(() => {
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
