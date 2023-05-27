import List from "../../components/list/list.component";
import { filterTodosByStatus } from "../../helpers/utilities.helper";
import { useFetchResults, useTodos } from "../../hooks/useHooks.hook";

export default function Finished() {
  const { todos } = useTodos();
  const { hasResults, todosFiltered } = useFetchResults();

  const completedTodos = filterTodosByStatus(todos, true);
  const completedFilteredTodos = filterTodosByStatus(todosFiltered, true);

  return hasResults && completedFilteredTodos.length > 0 ? (
    <List todos={completedFilteredTodos} />
  ) : (
    <List todos={completedTodos} />
  );
}
