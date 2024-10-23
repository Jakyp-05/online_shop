import { apiRoot } from "../../api/config/api";
import { Product } from "../types/productTypes";

export const getIdProduct = async (id: number): Promise<Product> => {
  const res = await apiRoot.get<Product>(`products/${id}`);
  return res.data;
};
