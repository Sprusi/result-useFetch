import React, { useCallback, useMemo, useState } from "react";

export function useToggle(initialState = true) {
  const isArray = Array.isArray(initialState);
  const [value, setValue] = useState(isArray ? initialState[0] : initialState);

  const toggle = (nextValue) => {
    setValue((prev) => {
      if (!isArray) {
        return !prev;
      }
      if (nextValue !== undefined) {
        return isArray && initialState.includes(nextValue) ? nextValue : !prev;
      }
      const currentIndex = initialState.indexOf(prev);
      const nextIndex = (currentIndex + 1) % initialState.length;
      return initialState[nextIndex];
    });
  };

  return [value, toggle];
}
