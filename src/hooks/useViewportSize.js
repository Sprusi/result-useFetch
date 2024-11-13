import { useEffect, useState } from "react";
import { useThrottle } from "./useThottle";

export const useViewportSize = (type, listener, options) => {
  const eventType = type || "resize";
  const eventFunction = listener || handleResize;

  const isWindow = typeof window !== "undefined";
  const isResizeEvent = eventType === "resize";
  const initialHeight = isWindow && isResizeEvent ? window.innerHeight : null;
  const initialWidth = isWindow && isResizeEvent ? window.innerWidth : null;

  const [height, setHeight] = useState(initialHeight);
  const [width, setWidth] = useState(initialWidth);

  const thottleHeight = useThrottle(height);
  const thottleWidth = useThrottle(width);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(eventType, eventFunction, options);
      return () =>
        window.removeEventListener(eventType, eventFunction, options);
    }
  }, [type, listener]);

  return { height: thottleHeight, width: thottleWidth };
};
