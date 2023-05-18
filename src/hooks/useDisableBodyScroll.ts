import { useEffect } from "react";

export const useDisableBodyScroll = (open: boolean) => {
  const scrollbarWidth =
    typeof window != "undefined" &&
    window.innerWidth - document.documentElement.clientWidth;

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.transitionProperty = "color";
    } else {
      document.documentElement.style.overflowY = "unset";
      document.body.style.paddingRight = "0";
      document.body.style.transitionProperty = "color";
    }
  }, [open]);
};
