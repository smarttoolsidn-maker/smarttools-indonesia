import { useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);

      return item
        ? JSON.parse(item)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  function setStoredValue(newValue: T) {
    setValue(newValue);

    try {
      localStorage.setItem(
        key,
        JSON.stringify(newValue)
      );
    } catch {
      // ignore
    }
  }

  return [value, setStoredValue] as const;
}