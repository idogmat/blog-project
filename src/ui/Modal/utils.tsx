import { useCallback, useEffect, useState } from "react";

export const useMount = (opened: boolean) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
      return;
    }

    setTimeout(() => setMounted(false), 300);
  }, [opened]);

  return { mounted };
};
export const lockPadding = () => {
  const paddingValue = window.innerWidth - document.body.offsetWidth;

  document.body.style.paddingRight = `${paddingValue}px`;
};

export const unlockPadding = () => {
  document.body.style.paddingRight = `0px`;
};

export interface BodyScrollOptions {
  reserveScrollBarGap?: boolean | undefined;
  allowTouchMove?: ((el: HTMLElement | Element) => boolean) | undefined;
}
export const useEscapeKey = (handleClose: Function) => {
  const handleEscPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscPress, false);
    return () => {
      document.removeEventListener("keydown", handleEscPress, false);
    };
  }, [handleEscPress]);
};
