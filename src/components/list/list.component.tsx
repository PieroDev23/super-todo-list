import { Todo as ITodo } from "../../interfaces/todos.interfaces";
import Todo from "../todo/todo.component";

import "./list.component.css";

interface ListProps {
  todos: Array<ITodo>;
}

export default function List({ todos }: ListProps) {
  return (
    <div className="list">
      <div className="list__area">
        {todos.map((todo, idx) => (
          <Todo todo={todo} order={idx + 1} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
