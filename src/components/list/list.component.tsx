import "./list.component.css";

export default function List() {
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

      <div className="list__area">{/* TODOS GOES HERE */}</div>
    </div>
  );
}
