import List from "../../components/list/list.component";
import { useTodos } from "../../hooks/useHooks.hook";

export default function Pending() {
  const { todos } = useTodos();
  const pendingTodos = todos.filter((todos) => todos.status === false);
  return <List todos={pendingTodos}></List>;
}
