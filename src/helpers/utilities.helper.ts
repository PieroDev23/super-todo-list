import { Todo } from "../interfaces/todos.interfaces";

type ConfigDate = Intl.DateTimeFormatOptions;

export function dateFormatter(): string {
  const date = new Date();
  const config: ConfigDate = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("es-ES", config);
}

export function genId(): string {
  const timeStamp = Date.now().toString();
  const randomNum = Math.random().toString(36).substring(2, 9);
  return timeStamp + randomNum;
}

export function formatScore(score: number) {
  return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function removeExtraSpaces(value: string): string {
  return value
    .trim()
    .split(" ")
    .filter((w) => w !== "")
    .join(" ")
    .toLowerCase();
}

export function filterTodosByStatus(todos: Array<Todo>, status: boolean): Array<Todo> {
  return todos.filter((todo) => todo.status === status);
}
