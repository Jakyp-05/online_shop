import { Product } from "../../../interface";

export interface productIdState {
  product: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
