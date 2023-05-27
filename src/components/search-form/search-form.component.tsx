import { useState } from "react";
import { Priority } from "../../interfaces/todos.interfaces";

import { useTodos } from "../../hooks/useHooks.hook";
import { removeExtraSpaces } from "../../helpers/utilities.helper";

import "./search-form.component.css";

export default function SearchForm() {
  const [search, setSearch] = useState<string>("");
  const [orderBy, setOrderBy] = useState<Priority>("");

  const { handleSetTodosFiltered, todos } = useTodos();

  const handleSearchTodos = () => {
    const results = todos.filter(
      (todo) =>
        removeExtraSpaces(todo.name).indexOf(removeExtraSpaces(search)) !== -1
    );

    if (results.length === 0) {
      return;
    }

    handleSetTodosFiltered(results);
  };

  return (
    <>
      <h3 className="title">🧠 Todo List</h3>
      <form className="search">
        <div className="search__field">
          <input
            type="text"
            placeholder="Search todo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxLength={30}
            className="search__field__input"
          />
          <button
            type="button"
            className="search__field__button"
            onClick={handleSearchTodos}
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        <div className="search__order-by">
          <select
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value as Priority)}
            className="search__order-by__select"
          >
            <option value="">Order by Priority 🚥</option>
            <option value="low">🟢 Low Priority </option>
            <option value="medium">🟡 Medium Priority</option>
            <option value="high"> 🔴 High Priority</option>
          </select>
        </div>
      </form>
    </>
  );
}
