import { apiRoot } from "../../api/api";
import { Product } from "../../interface";

export const getIdProduct = async (id: number): Promise<Product> => {
  const res = await apiRoot.get<Product>(`products/${id}`);
  return res.data;
};
