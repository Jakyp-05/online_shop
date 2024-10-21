import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productIdState } from "./type";
import { getIdProductAction } from "./action";
import { Product } from "../../../interface";

const initialState: productIdState = {
  product: null,
  status: "idle",
  error: null,
};

const productIdSlice = createSlice({
  name: "productId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIdProductAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getIdProductAction.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.status = "succeeded";
          state.product = action.payload;
        }
      )
      .addCase(getIdProductAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch product id";
      });
  },
});

export default productIdSlice.reducer;
