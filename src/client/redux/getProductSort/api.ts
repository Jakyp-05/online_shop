import { apiRoot } from "../../../api/api";
import { Product } from "../../../interface";

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
