import { filterTodosByStatus } from "../../helpers/utilities.helper";
import { useTodos } from "../../hooks/useHooks.hook";
import List from "../../components/list/list.component";

export default function Pending() {
  const { filteredTodos } = useTodos();
  
  const pendingTodos = filterTodosByStatus(filteredTodos, false);
  return <List todos={pendingTodos} />;
}
