import { createAsyncThunk } from "@reduxjs/toolkit";
import { Categories } from "../../../api/types/CategoriesTypes";
import { getAllCategories } from "../../../api/services/getAllCategories";

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
