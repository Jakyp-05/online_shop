import { apiRoot } from "../../api/config/api";
export const getIdProduct = async (id) => {
    const res = await apiRoot.get(`products/${id}`);
    return res.data;
};
