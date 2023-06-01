import { Todo } from "../interfaces/todos.interfaces";

export const initialState: Todo = {
  id: 0,
  name: "",
  date: "",
  status: false,
  priority: 0,
};

export const Colors: { [k: number]: string } = {
  10: "#2BDEAB",
  20: "#EFBB6B",
  30: "#F63528",
};
