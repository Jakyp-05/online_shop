import { combineReducers } from "@reduxjs/toolkit";

import categoriesSlice from "./getAllCategories/slice";
import productSlice from "./getProducts/slice";
import productIdSlice from "./getProductId/slice";

export const rootReducerClient = combineReducers({
  products: productSlice,
  categories: categoriesSlice,
  productId: productIdSlice,
});


