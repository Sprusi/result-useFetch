import { useCallback, useEffect, useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export const useLocalStorage: UseLocalStorage = (key) => {
  const getValueFromStorage = (key: string): LocalStorageReturnValue => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  const [value, setValue] = useState<LocalStorageReturnValue>(() =>
    getValueFromStorage(key)
  );

  const setItem = useCallback(
    (newValue: LocalStorageSetValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    },
    [key]
  );

  const removeItem = useCallback(() => {
    localStorage.removeItem(key);
    setValue(null);
  }, [key]);

  useEffect(() => {
    const storedValue = getValueFromStorage(key);
    if (storedValue !== value) {
      setValue(storedValue);
    }
  }, [key]);

  return [value, { setItem, removeItem }];
};
