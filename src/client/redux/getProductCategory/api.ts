import { apiRoot } from "../../../api/api";
import { Products } from "../../interface";

export const getProductsCategory = async (
  category: string
): Promise<Products> => {
  const res = await apiRoot.get<Products>(`products/category/${category}`);
  return res.data;
};
