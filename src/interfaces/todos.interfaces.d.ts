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
  todo: Todo;
  todosFiltered: Array<Todo>;
  handleAddTodo: (todo: Todo) => void;
  handleSetTodo: (todo: Todo) => void;
  handleEditTodo: (todo: Todo) => void;
  handleRemoveTodo: (todo: Todo) => void;
  handleChangeFlagTodo: (todo: Todo) => void;
  handleSetTodosFiltered: (todos: Array<todo>) => void;
}

export interface ScoreContextType {
  score: number;
  handleIncrementScore: (score: number) => void;
}
