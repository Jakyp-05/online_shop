import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "./getProducts/slice";
import productIdSlice from "./getProductId/slice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    productId: productIdSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
