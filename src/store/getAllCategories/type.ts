import { Categories } from "../../api/types/CategoriesTypes";

export interface categoriesState {
  categories: Categories[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
