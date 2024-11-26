declare const useAdminCategory: () => {
    openCategory: boolean;
    selectedCategory: string;
    categories: import("../../api/types/CategoriesTypes").Categories[];
    handleOpenCategory: () => void;
    handleCategorySelect: (categoryName: string) => void;
    ref: import("react").MutableRefObject<HTMLUListElement | null>;
    resetCategoryFilter: () => void;
};
export default useAdminCategory;
