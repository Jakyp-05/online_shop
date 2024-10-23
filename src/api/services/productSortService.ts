import { apiRoot } from "../config/api";
import { Product } from "../types/productTypes";

export const getProductSort = async ({
  sortBy,
  order,
}: {
  sortBy: string;
  order: "asc" | "desc";
}): Promise<Product[]> => {
  const res = await apiRoot.get<{ products: Product[] }>(
    `products?sortBy=${sortBy}&order=${order}`
  );
  return res.data.products;
};
