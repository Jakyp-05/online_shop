import { apiRoot } from "../../api/config/api";
import { Products } from "../types/productTypes";

export const getProductsCategory = async (
  category: string
): Promise<Products> => {
  const res = await apiRoot.get<Products>(`products/category/${category}`);
  return res.data;
};
