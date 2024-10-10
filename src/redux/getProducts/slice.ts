import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsState } from "./type";
import { getAllProductsAction } from "./action";
import { Products } from "../../interface";
import { getProductsCategoryAction } from "../getProductCategory/action";

const initialState: productsState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 30,
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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
      });
  },
});

export default productSlice.reducer;
