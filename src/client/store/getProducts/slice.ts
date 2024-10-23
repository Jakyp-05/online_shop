import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product, Products } from "../../../api/types/productTypes";
import { getProductsCategoryAction } from "../getProductCategory/action";
import { getProductSortAction } from "../getProductSort/action";
import { getAllProductsAction } from "./action";
import { productsState } from "./type";

const initialState: productsState = {
  products: [],
  sortBy: "",
  order: "asc",
  total: 0,
  skip: 0,
  limit: 30,
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSortBy: (
      state,
      action: PayloadAction<{ sortBy: string; order: "asc" | "desc" }>
    ) => {
      state.sortBy = action.payload.sortBy;
      state.order = action.payload.order;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getAllProductsAction.fulfilled,
        (state, action: PayloadAction<Products>) => {
          state.status = "succeeded";
          state.products = action.payload.products;
          state.limit = action.payload.limit;
          state.skip = action.payload.skip;
          state.total = action.payload.total;
        }
      )
      .addCase(getAllProductsAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(getProductsCategoryAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getProductsCategoryAction.fulfilled,
        (state, action: PayloadAction<Products>) => {
          state.status = "succeeded";
          state.products = action.payload.products;
        }
      )
      .addCase(getProductsCategoryAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch category";
      })
      .addCase(getProductSortAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getProductSortAction.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(getProductSortAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to sort products";
      });
  },
});

export const { setSortBy } = productSlice.actions;
export default productSlice.reducer;
