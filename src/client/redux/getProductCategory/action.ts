import { createAsyncThunk } from "@reduxjs/toolkit";

import { Products } from "../../interface";
import { getProductsCategory } from "./api";

export const getProductsCategoryAction = createAsyncThunk<Products, string>(
  "category",
  async (category: string, { rejectWithValue }) => {
    try {
      const res = await getProductsCategory(category);
      return res;
    } catch (error) {
      return rejectWithValue("Failed to fetch category");
    }
  }
);
