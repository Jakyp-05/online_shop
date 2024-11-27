import { useEffect, useRef } from "react";
const useOutSideClick = (callback) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleClick = (evenet) => {
            if (ref.current && !ref.current.contains(evenet.target)) {
                callback();
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [callback]);
    return ref;
};
export default useOutSideClick;
