import List from "../../components/list/list.component";
import { filterTodosByStatus } from "../../helpers/utilities.helper";
import { useTodos } from "../../hooks/useHooks.hook";

export default function Finished() {
  const { todos } = useTodos();

  const completedTodos = filterTodosByStatus(todos, true);
  return <List todos={completedTodos} />;
}
