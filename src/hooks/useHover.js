import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", () => setHovered(true));
      node.addEventListener("mouseleave", () => setHovered(false));
    }

    return () => {
      if (node) {
        node.removeEventListener("mouseenter", () => setHovered(true));
        node.removeEventListener("mouseleave", () => setHovered(false));
      }
    };
  }, []);

  return { hovered, ref };
};
