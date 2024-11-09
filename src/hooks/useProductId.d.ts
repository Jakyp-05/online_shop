declare const useProductId: (isCatalog?: boolean) => {
    product: import("../api/types/productTypes").Product | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    handleCloseRoute: () => void;
};
export default useProductId;
