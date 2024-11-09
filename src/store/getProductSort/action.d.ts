import { Product } from "../../api/types/productTypes";
interface SortParams {
    sortBy: string;
    order: "asc" | "desc";
}
export declare const getProductSortAction: import("@reduxjs/toolkit").AsyncThunk<Product[], SortParams, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export {};
