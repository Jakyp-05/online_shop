import { apiRoot } from "../../api/api";
import { Product } from "../../interface";

export const getProductsCategory = async (
  category: string
): Promise<Product[]> => {
  const res = await apiRoot.get<Product[]>(`products/category/${category}`);
  return res.data;
};
