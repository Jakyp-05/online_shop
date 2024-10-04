import { Product } from "../../interface";

export interface productsState {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
