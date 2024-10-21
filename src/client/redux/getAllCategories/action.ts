import { createAsyncThunk } from "@reduxjs/toolkit";
import { Categories} from "../../../interface";
import { getAllCategories } from "./api";

export const getAllCategoriesAction = createAsyncThunk<Categories[]>(
  "categories",
  async () => {
    try {
      const res = getAllCategories();
      return res;
    } catch (error) {
      throw new Error();
    }
  }
);

