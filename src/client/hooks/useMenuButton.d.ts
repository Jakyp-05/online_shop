declare const useMenuButton: (onclick: () => void) => {
    ref: import("react").MutableRefObject<HTMLButtonElement | null>;
    toggleMenu: () => void;
    opened: boolean;
};
export default useMenuButton;
