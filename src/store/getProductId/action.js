import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIdProduct } from "../../api/services/productIdService";
export const getIdProductAction = createAsyncThunk("product-id", async (productId, { rejectWithValue }) => {
    try {
        const res = await getIdProduct(productId);
        return res;
    }
    catch (error) {
        return rejectWithValue("Failed to fetch product");
    }
});
