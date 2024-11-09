declare const useCategoryParoducts: () => {
    ref: import("react").MutableRefObject<HTMLUListElement | null>;
    categoryOpen: boolean;
    activeCategory: () => void;
    selectedCategory: string;
    handleFilterCategory: (newCategory: string) => void;
    resetCategoryFilter: () => void;
};
export default useCategoryParoducts;
