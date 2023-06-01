import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [data, setData] = useState<T>(() => {
    const dataLS = localStorage.getItem(key);
    if (!dataLS) return defaultValue;

    return JSON.parse(dataLS);
  });

  useEffect(() => {
    const rawValue = JSON.stringify(data);
    localStorage.setItem(key, rawValue);
  }, [data, key]);

  return [data, setData];
}
