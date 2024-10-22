import { useState } from "react";
import useOutSideClick from "../../hooks/useOutSideClick";

const useMenuButton = (onclick: () => void) => {
  const [opened, setOpened] = useState<boolean>(false);

  const ref = useOutSideClick<HTMLButtonElement>(() => {
    setOpened(false);
  });

  const toggleMenu = () => {
    setOpened(!opened);
    onclick();
  };

  return {ref, toggleMenu, opened}
};

export default useMenuButton;
