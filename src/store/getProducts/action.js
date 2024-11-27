import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/services/productService";
export const getAllProductsAction = createAsyncThunk("products", async () => {
    try {
        const res = await getAllProducts();
        return res;
    }
    catch (error) {
        throw new Error("Failed to fetch products");
    }
});
