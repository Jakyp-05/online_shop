import { Product } from "./productTypes";
export interface productIdState {
    product: Product | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
