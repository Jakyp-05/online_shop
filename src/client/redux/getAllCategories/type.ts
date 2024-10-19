import { Categories } from "../../interface";

export interface categoriesState {
  categories: Categories[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
