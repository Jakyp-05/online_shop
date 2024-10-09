import { createAsyncThunk } from "@reduxjs/toolkit";

import {Product } from "../../interface";
import { getProductsCategory } from "./api";

export const getProductsCategoryAction = createAsyncThunk<Product[], string>(
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
