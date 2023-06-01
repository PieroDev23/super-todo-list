import { PropsWithChildren, createContext, useState } from "react";
import { Todo, TodosContextType } from "../interfaces/todos.interfaces";
import { initialState } from "../data/constants.data";
import { useLocalStorage } from "../hooks/useLocaleStorage";

//Creando contexto
export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType
);

export default function TodosProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useLocalStorage<Array<Todo>>("todos", []);
  const [query, setQuery] = useState("");
  const [todo, setTodo] = useState<Todo>(initialState);

  //Agregar todos
  const handleAddTodo = (todo: Todo) => {
    setTodos((prevTodos: Array<Todo>) => [...prevTodos, todo]);
  };

  //filtrar Todos
  const handleSetQuery = (query: string) => {
    setQuery(query);
  };

  const filteredTodos = todos.filter((todo: Todo) =>
    todo.name.toLowerCase().includes(query)
  );

  //Agregando todo al state
  const handleSetTodo = (todo: Todo) => {
    setTodo((prevTodo) => ({ ...prevTodo, ...todo }));
  };

  //Editar todo
  const handleEditTodo = (todoOnUpdate: Todo) => {
    const updatedList = todos.map((todo: Todo) => {
      if (todo.id === todoOnUpdate.id) {
        return {
          ...todoOnUpdate,
        };
      }

      return todo;
    });

    setTodos(() => updatedList);
    setTodo(initialState);
  };

  //Eliminar todo
  const handleRemoveTodo = (todoOnDelete: Todo) => {
    const updatedList = todos.filter(
      (todo: Todo) => todo.id !== todoOnDelete.id
    );
    setTodos(() => updatedList);
  };

  //Completar todo
  const handleChangeFlagTodo = (todoOnUpdate: Todo) => {
    const updatedList = todos.map((todo: Todo) => {
      if (todo.id === todoOnUpdate.id) {
        return {
          ...todo,
          status: !todo.status,
        };
      }

      return todo;
    });

    setTodos(() => updatedList);
  };

  const values: TodosContextType = {
    filteredTodos,
    todo,
    query,
    handleAddTodo,
    handleSetTodo,
    handleEditTodo,
    handleRemoveTodo,
    handleChangeFlagTodo,
    handleSetQuery,
  };

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
}
