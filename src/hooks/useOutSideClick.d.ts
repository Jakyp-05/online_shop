declare const useOutSideClick: <T extends HTMLElement>(callback: () => void) => import("react").MutableRefObject<T | null>;
export default useOutSideClick;
