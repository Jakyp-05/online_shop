import { createSlice } from "@reduxjs/toolkit";
import { getAllCategoriesAction } from "./action";
const initialState = {
    categories: [],
    status: "idle",
    error: null,
};
const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategoriesAction.pending, (state) => {
            state.status = "loading";
        })
            .addCase(getAllCategoriesAction.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.categories = action.payload;
        })
            .addCase(getAllCategoriesAction.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch category";
        });
    },
});
export default categoriesSlice.reducer;
