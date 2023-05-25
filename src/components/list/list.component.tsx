import { genId } from "../../helpers/utilities.helper";
import { Todo as TodoInterface } from "../../interfaces/todos.interfaces";
import Todo from "../todo/todo.component";
import "./list.component.css";

interface ListProps {
  todos: Array<TodoInterface>;
}

export default function List({ todos }: ListProps) {
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
      </form>

      <div className="list__area">
        {todos.map((todo, idx) => (
          <Todo todo={todo} order={idx + 1} key={genId()} />
        ))}
      </div>
    </div>
  );
}
