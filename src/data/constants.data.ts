import { Todo } from "../interfaces/todos.interfaces";

export const initialState: Todo = {
  id: 0,
  name: "",
  date: "",
  status: false,
  priority: "",
};

export const Colors: { [k: string]: string } = {
  low: "#2BDEAB",
  medium: "#EFBB6B",
  high: "#F63528",
};
