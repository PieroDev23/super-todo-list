import { filterTodosByStatus } from "../../helpers/utilities.helper";
import { useTodos } from "../../hooks/useHooks.hook";
import List from "../../components/list/list.component";

export default function Pending() {
  const { todos } = useTodos();
  
  const pendingTodos = filterTodosByStatus(todos, false);
  return <List todos={pendingTodos} />;
}
