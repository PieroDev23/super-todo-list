import { useTodos } from "../../hooks/useTodos.hook";
import "./search-form.component.css";

export default function SearchForm() {
  const { handleSetQuery, query } = useTodos();

  return (
    <>
      <h3 className="title">🧠 Todo List</h3>
      <form className="search">
        <div className="search__field">
          <input
            type="text"
            placeholder="Search todo"
            value={query}
            onChange={(e) => handleSetQuery(e.target.value.toLowerCase())}
            maxLength={30}
            className="search__field__input"
          />
          <button
            type="button"
            className="search__field__button"
            onClick={() => handleSetQuery("")}
          >
            Clear
          </button>
        </div>
      </form>
    </>
  );
}
