import { createSlice } from "@reduxjs/toolkit";
import { getIdProductAction } from "./action";
const initialState = {
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
            .addCase(getIdProductAction.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.product = action.payload;
        })
            .addCase(getIdProductAction.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch product id";
        });
    },
});
export default productIdSlice.reducer;
