import { Product } from "../../../api/types/productTypes";

export interface productIdState {
  product: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
