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
  handleSetTodos: (todo: Todo) => void;
}
