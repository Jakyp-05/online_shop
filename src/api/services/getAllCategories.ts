import { apiRoot } from "../../api/config/api";
import { Categories } from "../types/CategoriesTypes";

export const getAllCategories = async (): Promise<Categories[]> => {
  const res = await apiRoot.get<Categories[]>("products/categories");
  return res.data;
};
