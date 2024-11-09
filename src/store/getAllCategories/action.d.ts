import { Categories } from "../../api/types/CategoriesTypes";
export declare const getAllCategoriesAction: import("@reduxjs/toolkit").AsyncThunk<Categories[], void, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
