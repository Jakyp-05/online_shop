import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategories } from "../../api/services/getAllCategories";
export const getAllCategoriesAction = createAsyncThunk("categories", async () => {
    try {
        const res = getAllCategories();
        return res;
    }
    catch (error) {
        throw new Error();
    }
});
