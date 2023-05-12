import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: PropsWithChildren) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("root") || document?.body;
    setMounted(true);
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
