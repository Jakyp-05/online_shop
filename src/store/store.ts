import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import categoriesSlice from "./getAllCategories/slice";
import productSlice from "./getProducts/slice";
import productIdSlice from "./getProductId/slice";

const rootReducer = combineReducers({
  products: productSlice,
  categories: categoriesSlice,
  productId: productIdSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();