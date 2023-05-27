import List from "../../components/list/list.component";
import { useFetchResults, useTodos } from "../../hooks/useHooks.hook";

export default function Home() {
  const { todos } = useTodos();
  const { hasResults, todosFiltered } = useFetchResults();
  return hasResults ? <List todos={todosFiltered} /> : <List todos={todos} />;
}
