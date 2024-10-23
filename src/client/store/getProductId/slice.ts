import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../api/types/productTypes";
import { getIdProductAction } from "./action";
import { productIdState } from "./type";

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
