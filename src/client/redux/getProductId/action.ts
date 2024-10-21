import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIdProduct } from "./api";
import { Product } from "../../../interface";

export const getIdProductAction = createAsyncThunk<Product, number>(
  "product-id",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await getIdProduct(productId);
      return res;
    } catch (error) {
      return rejectWithValue("Failed to fetch product");
    }
  }
);