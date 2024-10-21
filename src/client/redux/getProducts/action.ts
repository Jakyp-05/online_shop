import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "./api";
import { Products } from "../../../interface";

export const getAllProductsAction = createAsyncThunk<Products>(
  "products",
  async () => {
    try {
      const res = await getAllProducts();
      return res;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);
