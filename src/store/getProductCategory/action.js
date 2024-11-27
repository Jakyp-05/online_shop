import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsCategory } from "../../api/services/getProductCategory";
export const getProductsCategoryAction = createAsyncThunk("category", async (category, { rejectWithValue }) => {
    try {
        const res = await getProductsCategory(category);
        return res;
    }
    catch (error) {
        return rejectWithValue("Failed to fetch category");
    }
});
