import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../../api/types/productTypes";
import { getProductSort } from "../../../api/services/productSortService";


interface SortParams {
  sortBy: string;
  order: "asc" | "desc";
}

export const getProductSortAction = createAsyncThunk<Product[], SortParams>(
  "sort",
  async ({ sortBy, order }, { rejectWithValue }) => {
    try {
      const res = getProductSort({ sortBy, order });
      return res;
    } catch (error) {
      return rejectWithValue("Failed to fetch");
    }
  }
);
