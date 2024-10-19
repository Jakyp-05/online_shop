import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import categoriesSlice from "./getAllCategories/slice";
// import categorySlice from "./getProductCategory/slice";
import productSlice from "./getProducts/slice";
import productIdSlice from "./getProductId/slice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productSlice,
    productId: productIdSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
