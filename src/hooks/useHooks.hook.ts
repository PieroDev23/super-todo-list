import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../context/todo.context";
import { ScoreContext } from "../context/score.context";

export function useTodos() {
  return useContext(TodosContext);
}
export function useScore() {
  return useContext(ScoreContext);
}

export function useFetchResults() {
  const [hasResults, setHasResults] = useState(false);
  const { todosFiltered } = useTodos();

  useEffect(() => {
    if (todosFiltered.length > 0) {
      setHasResults(true);
    } else {
      setHasResults(false);
    }
  }, [todosFiltered]);

  return { hasResults, todosFiltered };
}
