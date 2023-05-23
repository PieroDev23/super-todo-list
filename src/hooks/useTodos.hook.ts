import { useContext } from "react";
import { TodosContext } from "../context/todo.context";

export function useTodos() {
  return useContext(TodosContext);
}
