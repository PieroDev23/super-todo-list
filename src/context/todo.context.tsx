import { PropsWithChildren, createContext, useState } from "react";
import { Todo, TodosContextType } from "../interfaces/todos.interfaces";

//Creando contexto
export const TodosContext = createContext<TodosContextType>({
  todos: [],
  handleSetTodos: () => {
    return;
  },
});

export default function TodosProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleSetTodos = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const values: TodosContextType = {
    todos,
    handleSetTodos,
  };

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
}
