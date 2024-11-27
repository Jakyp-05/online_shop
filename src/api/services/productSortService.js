import { apiRoot } from "../config/api";
export const getProductSort = async ({ sortBy, order, }) => {
    const res = await apiRoot.get(`products?sortBy=${sortBy}&order=${order}`);
    return res.data.products;
};
