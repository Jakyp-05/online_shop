import { Product } from "../../interface";

export interface categoryState {
  product: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
