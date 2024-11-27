import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductSort } from "../../api/services/productSortService";
export const getProductSortAction = createAsyncThunk("sort", async ({ sortBy, order }, { rejectWithValue }) => {
    try {
        const res = getProductSort({ sortBy, order });
        return res;
    }
    catch (error) {
        return rejectWithValue("Failed to fetch");
    }
});
