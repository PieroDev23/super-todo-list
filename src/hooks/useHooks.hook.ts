import { useContext } from "react";
import { TodosContext } from "../context/todo.context";
import { ScoreContext } from "../context/score.context";

export function useTodos() {
  return useContext(TodosContext);
}
export function useScore() {
  return useContext(ScoreContext);
}
