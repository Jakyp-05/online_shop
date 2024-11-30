import { createAsyncThunk } from "@reduxjs/toolkit";
import { productPagination } from "api/services/productPaginationService";
import { Products } from "api/types/productTypes";

interface PaginationParams {
  limit: number;
  skip: number;
}

export const getProductpaginationAction = createAsyncThunk<
  Products["products"],
  PaginationParams
>("sort", async ({ limit, skip }, { rejectWithValue }) => {
  try {
    const res = productPagination({ limit, skip });
    return res;
  } catch (error) {
    return rejectWithValue("Failed to fetch");
  }
});
