import { apiRoot } from "../../api/config/api";
export const getAllCategories = async () => {
    const res = await apiRoot.get("products/categories");
    return res.data;
};
