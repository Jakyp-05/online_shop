import { apiRoot } from "../config/api";
import { Products } from "../types/productTypes";

export const productPagination = async ({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}): Promise<Products["products"]> => {
  const res = await apiRoot.get<Products>(
    `products?limit=${limit}&skip=${skip}&select=title,price`
  );
  return res.data.products;
};
