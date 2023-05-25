export type Priority = "low" | "medium" | "high" | "";

export interface Todo {
  id: number | string;
  name: string;
  status: boolean;
  date: string;
  priority: Priority;
}

export interface TodosContextType {
  todos: Array<Todo>;
  todoEdit: Todo;
  handleSetTodos: (todo: Todo) => void;
  handleEditTodo: (todo: Todo) => void;
}
