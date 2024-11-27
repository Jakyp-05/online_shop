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
    const { category } = useParams();
    const [openCategory, setOpenCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All products");
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
    const handleCategorySelect = (categoryName) => {
        setSelectedCategory(categoryName);
        setOpenCategory(false);
        navigate(`/admin/products/category/${categoryName}`, { replace: true });
        dispatch(getProductsCategoryAction(categoryName));
    };
    const ref = useOutSideClick(() => {
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
