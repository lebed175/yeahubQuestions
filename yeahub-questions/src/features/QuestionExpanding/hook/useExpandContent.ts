import { useEffect, useRef, useState } from "react";

export const useExpandContent = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [canExpand, setCanExpand] = useState(false);

  useEffect(() => {
    if (!contentRef.current) return;

    const { scrollHeight, clientHeight } = contentRef.current;

    setCanExpand(scrollHeight > clientHeight);
  }, []);

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return { canExpand, open, toggle, contentRef };
};
