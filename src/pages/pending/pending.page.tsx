import List from "../../components/list/list.component";

import { filterTodosByStatus } from "../../helpers/utilities.helper";
import { useFetchResults, useTodos } from "../../hooks/useHooks.hook";

export default function Pending() {
  const { todos } = useTodos();
  const { hasResults, todosFiltered } = useFetchResults();

  const pendingTodos = filterTodosByStatus(todos, false);
  const pendingFilteredTodos = filterTodosByStatus(todosFiltered, false);

  return hasResults && pendingFilteredTodos.length > 0 ? (
    <List todos={pendingFilteredTodos} />
  ) : (
    <List todos={pendingTodos} />
  );
}
