import { apiRoot } from "../../../api/api";
import { Products } from "../../interface";

export const getAllProducts = async (): Promise<Products> => {
  const res = await apiRoot.get<Products>("products");
  return res.data;
};
