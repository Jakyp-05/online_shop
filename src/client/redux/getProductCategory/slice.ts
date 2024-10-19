// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { getProductsCategoryAction } from "./action";
// import { categoryState } from "./type";
// import { Products } from "../../interface";

// const initialState: categoryState = {
//   products: [],
//   status: "idle",
//   error: null,
// };

// const categorySlice = createSlice({
//   name: "category",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProductsCategoryAction.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(
//         getProductsCategoryAction.fulfilled,
//         (state, action: PayloadAction<Products>) => {
//           state.status = "succeeded";
//           state.products = action.payload;
//           console.log(action.payload);
//         }
//       )
//       .addCase(getProductsCategoryAction.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch category";
//       });
//   },
// });

// export default categorySlice.reducer;
