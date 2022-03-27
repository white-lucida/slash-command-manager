import { useState, useCallback } from "react";

export const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleOpened = useCallback(() => setIsOpened(!isOpened), [isOpened]);
  const open = useCallback(() => setIsOpened(true), [isOpened]);
  const close = useCallback(() => setIsOpened(false), [isOpened]);

  return {
    isOpened,
    toggleOpened,
    open,
    close,
  };
};
