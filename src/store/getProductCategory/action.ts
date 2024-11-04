import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProductsCategory } from "../../api/services/getProductCategory";
import { Products } from "../../api/types/productTypes";


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
