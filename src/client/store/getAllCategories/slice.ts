import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoriesState } from "./type";
import { getAllCategoriesAction } from "./action";
import { Categories } from "../../../api/types/CategoriesTypes";

const initialState: categoriesState = {
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
      .addCase(
        getAllCategoriesAction.fulfilled,
        (state, action: PayloadAction<Categories[]>) => {
          state.status = "succeeded";
          state.categories = action.payload;
        }
      )
      .addCase(getAllCategoriesAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch category";
      });
  },
});

export default categoriesSlice.reducer;
