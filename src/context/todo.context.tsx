import { PropsWithChildren, createContext, useState } from "react";
import { Todo, TodosContextType } from "../interfaces/todos.interfaces";
import { initialState } from "../data/constants.data";

//Creando contexto
export const TodosContext = createContext<TodosContextType>({
  todos: [],
  todoEdit: initialState,
  handleSetTodos: () => {
    return;
  },
  handleEditTodo: () => {
    return;
  },
});

export default function TodosProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todoEdit, setTodoEdit] = useState<Todo>(initialState);

  //Agregar todos
  const handleSetTodos = (todo: Todo) => {
    console.log(todo);

    setTodos((prev) => [...prev, todo]);
  };

  //Editar todo
  const handleEditTodo = (todo: Todo) => {
    setTodoEdit(todo);
  };
  
  //TODO: Eliminar todo

  //TODO: Completar todo

  const values: TodosContextType = {
    todos,
    todoEdit,
    handleSetTodos,
    handleEditTodo,
  };

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
}
