import { apiRoot } from "../../api/config/api";
export const getProductsCategory = async (category) => {
    const res = await apiRoot.get(`products/category/${category}`);
    return res.data;
};
