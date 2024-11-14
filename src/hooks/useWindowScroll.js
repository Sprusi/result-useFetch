import { useCallback, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";
import { useThrottle } from "./useThottle";

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  const throttlePosition = useThrottle(scroll);

  const handleScroll = useCallback(() => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  }, []);

  useWindowEvent("scroll", handleScroll);

  const scrollTo = useCallback(({ x = window.scrollX, y = window.scrollY }) => {
    window.scrollTo(x, y);
  }, []);

  return [throttlePosition, scrollTo];
};
