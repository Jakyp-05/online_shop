import { Product } from "../../api/types/productTypes";

export interface productsState {
  products: Product[];
  sortBy: string;
  order: "asc" | "desc";
  total: number;
  skip: number;
  limit: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
