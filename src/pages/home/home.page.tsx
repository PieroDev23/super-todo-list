import List from "../../components/list/list.component";
import { useTodos } from "../../hooks/useHooks.hook";

export default function Home() {
  const { filteredTodos } = useTodos();
  return <List todos={filteredTodos} />;
}
