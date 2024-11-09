declare const useProduct: () => {
    products: import("../api/types/productTypes").Product[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
};
export default useProduct;
