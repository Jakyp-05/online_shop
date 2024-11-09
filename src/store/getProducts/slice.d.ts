import { productsState } from "./type";
export declare const setSortBy: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    sortBy: string;
    order: "asc" | "desc";
}, "products/setSortBy">;
declare const _default: import("redux").Reducer<productsState>;
export default _default;
