import { useEffect, useRef } from "react";

const useOutSideClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (evenet: MouseEvent) => {
      if (ref.current && !ref.current.contains(evenet.target as Node)) {
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
