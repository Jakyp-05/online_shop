declare const useCategories: () => {
    categories: import("../api/types/CategoriesTypes").Categories[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
};
export default useCategories;
