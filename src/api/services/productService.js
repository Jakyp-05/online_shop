import { apiRoot } from "../config/api";
export const getAllProducts = async () => {
    const res = await apiRoot.get("products");
    return res.data;
};
