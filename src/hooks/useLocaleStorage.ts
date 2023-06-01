import { useEffect, useState } from "react";
import { Todo } from "../interfaces/todos.interfaces";

type LocalStorageData = number | Array<Todo>;

export function useLocalStorage(key: string, defaultValue: LocalStorageData) {
  
  const [data, setData] = useState(() => {
    const dataLS = localStorage.getItem(key);
    if (!dataLS) return defaultValue;
    return JSON.parse(dataLS);
  });

  useEffect(() => {
    const rawValue = JSON.stringify(data);
    localStorage.setItem(key, rawValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return [data, setData];
}
