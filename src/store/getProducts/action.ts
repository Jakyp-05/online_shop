import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/services/productService";
import { Products } from "../../api/types/productTypes";

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
