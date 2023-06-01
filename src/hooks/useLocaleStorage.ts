import { useEffect } from "react";
import { Todo } from "../interfaces/todos.interfaces";

type LocalStorageData = number | Array<Todo>;

export function useLocalStorage(data: LocalStorageData, key: string) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return localStorage.getItem(key);
}
