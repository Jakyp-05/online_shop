import { apiRoot } from "../../api/api";
import { Categories } from "../../interface";

export const getAllCategories = async (): Promise<Categories[]> => {
  const res = await apiRoot.get<Categories[]>("products/categories");
  return res.data;
};
