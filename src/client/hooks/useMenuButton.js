import { useState } from "react";
import useOutSideClick from "../../hooks/useOutSideClick";
const useMenuButton = (onclick) => {
    const [opened, setOpened] = useState(false);
    const ref = useOutSideClick(() => {
        setOpened(false);
    });
    const toggleMenu = () => {
        setOpened(!opened);
        onclick();
    };
    return { ref, toggleMenu, opened };
};
export default useMenuButton;
