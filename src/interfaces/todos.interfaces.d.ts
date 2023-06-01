export interface Todo {
  id: number | string;
  name: string;
  status: boolean;
  date: string;
  priority: number;
}

export interface TodosContextType {
  filteredTodos: Array<Todo>;
  todo: Todo;
  query: string;
  handleAddTodo: (todo: Todo) => void;
  handleSetTodo: (todo: Todo) => void;
  handleEditTodo: (todo: Todo) => void;
  handleRemoveTodo: (todo: Todo) => void;
  handleChangeFlagTodo: (todo: Todo) => void;
  handleSetQuery: (query: string) => void;
}

export interface ScoreContextType {
  score: number;
  handleIncrementScore: (score: number) => void;
}