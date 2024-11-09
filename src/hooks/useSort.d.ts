declare const useSort: () => {
    openSort: boolean;
    handleSort: (sortValue: string) => void;
    handleOpenSort: () => void;
    ref: import("react").MutableRefObject<HTMLUListElement | null>;
    handleSortClick: (sortValue: string) => void;
};
export default useSort;
