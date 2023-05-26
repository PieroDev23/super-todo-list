import List from "../../components/list/list.component";
import { useTodos } from "../../hooks/useHooks.hook";

export default function Finished() {
  const { todos } = useTodos();
  const completedTodos = todos.filter((todos) => todos.status === true);
  return <List todos={completedTodos}></List>;
}
