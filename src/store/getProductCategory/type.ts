import { Products } from "../../api/types/productTypes";

export interface categoryState {
  products: Products;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
