export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    products: import("./getProducts/type").productsState;
    categories: import("./getAllCategories/type").categoriesState;
    productId: import("./getProductId/type").productIdState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        products: import("./getProducts/type").productsState;
        categories: import("./getAllCategories/type").categoriesState;
        productId: import("./getProductId/type").productIdState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux-thunk").ThunkDispatch<{
    products: import("./getProducts/type").productsState;
    categories: import("./getAllCategories/type").categoriesState;
    productId: import("./getProductId/type").productIdState;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<{
    products: import("./getProducts/type").productsState;
    categories: import("./getAllCategories/type").categoriesState;
    productId: import("./getProductId/type").productIdState;
}>;
