import { ChangeEvent, useState } from "react";
import { Todo as ITodo, Priority } from "../../interfaces/todos.interfaces";
import Todo from "../todo/todo.component";

import "./list.component.css";

interface ListProps {
  todos: Array<ITodo>;
}

export default function List({ todos }: ListProps) {
  const [orderBy, setOrderBy] = useState<Priority>("");

  const handleChangePriority = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value as Priority);
  };

  return (
    <div className="list shadow">
      <h3 className="list__title">🧠 Todo List</h3>
      <form className="search">
        <div className="search__field">
          <input
            type="text"
            placeholder="Search todo"
            className="search__field__input"
          />
          <button type="button" className="search__field__button">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        <div className="search__order-by">
          <select
            value={orderBy}
            onChange={handleChangePriority}
            className="search__order-by__select"
          >
            <option value="">Order by Priority 🚥</option>
            <option value="low">🟢 Low Priority </option>
            <option value="medium">🟡 Medium Priority</option>
            <option value="high"> 🔴 High Priority</option>
          </select>
        </div>
      </form>

      <div className="list__area">
        {todos.map((todo, idx) => (
          <Todo todo={todo} order={idx + 1} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
