import { PropsWithChildren, createContext, useState } from "react";
import { Todo, TodosContextType } from "../interfaces/todos.interfaces";
import { initialState } from "../data/constants.data";

//Creando contexto
export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType
);

export default function TodosProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todo, setTodo] = useState<Todo>(initialState);
  const [todosFiltered, setTodosFiltered] = useState<Array<Todo>>([]);

  //Expose filtered todo
  const handleSetTodosFiltered = (todosUpdated: Array<Todo>) => {
    setTodosFiltered(() => [...todosUpdated]);
  };

  //Agregar todos
  const handleAddTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleSetTodo = (todo: Todo) => {
    setTodo((prevTodo) => ({ ...prevTodo, ...todo }));
  };

  //Editar todo
  const handleEditTodo = (todoOnUpdate: Todo) => {
    const updatedList = todos.map((todo) => {
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
    const updatedList = todos.filter((todo) => todo.id !== todoOnDelete.id);
    setTodos(() => updatedList);
  };

  //Completar todo
  const handleChangeFlagTodo = (todoOnUpdate: Todo) => {
    const updatedList = todos.map((todo) => {
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
    todos,
    todosFiltered,
    todo,
    handleAddTodo,
    handleSetTodo,
    handleEditTodo,
    handleRemoveTodo,
    handleChangeFlagTodo,
    handleSetTodosFiltered,
  };

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
}
