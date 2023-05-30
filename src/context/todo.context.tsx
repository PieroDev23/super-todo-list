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

  

  //Agregar todos
  const handleAddTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  //Agregando todo al state
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
    todo,
    handleAddTodo,
    handleSetTodo,
    handleEditTodo,
    handleRemoveTodo,
    handleChangeFlagTodo,
  };

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
}
