import { FormEvent, useEffect, useState } from "react";

import { initialState } from "../../data/constants.data";
import { dateFormatter, genId } from "../../helpers/utilities.helper";
import { useTodos } from "../../hooks/useTodos.hook";
import { Priority, Todo } from "../../interfaces/todos.interfaces";

import "./todo-form.component.css";

export default function TodoForm() {
  const [todo, setTodo] = useState<Todo>(() => initialState);
  const [validForm, setValidForm] = useState(() => ({
    invalidInput: false,
    disabledBtn: false,
  }));

  const { handleSetTodos } = useTodos();

  const handleChangeName = (name: string) => {
    setTodo((prevTodo) => ({ ...prevTodo, name }));
  };

  useEffect(() => {
    const invalid = todo.name !== "" && todo.name.length <= 10;
    const isDisabled = !todo.priority || !todo.name;

    setValidForm((prevState) => ({
      ...prevState,
      invalidInput: invalid,
      disabledBtn: isDisabled || invalid,
    }));
  }, [todo.name, todo.priority]);

  const handleChangePriority = (priority: Priority) => {
    setTodo((prevTodo) => ({ ...prevTodo, priority }));
  };

  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();

    if (Object.values(todo).includes("")) {
      return;
    }

    setTodo((prevTodo) => ({
      ...prevTodo,
      id: genId(),
      date: dateFormatter(new Date()),
      status: false,
    }));

    handleSetTodos(todo);
    setTodo(initialState);
  };

  return (
    <form className="form shadow" onSubmit={handleSubmit}>
      <h2 className="form__title">📝 Add a new Todo</h2>

      <div className="form__field">
        <label htmlFor="todo" className="form__field__label">
          Name:
        </label>
        {validForm.invalidInput ? (
          <span className="error-validation">Need at least 10 characters</span>
        ) : (
          ""
        )}
        <input
          type="text"
          className="form__field__input"
          id="todo"
          maxLength={30}
          value={todo.name}
          placeholder="Write here, max 30 characters at least 10 👽"
          onChange={(e) => handleChangeName(e.target.value)}
        />
      </div>

      <div className="form__field">
        <label className="form__field__label">Priority:</label>
        <div className="radios">
          <div className="radios__radio radios__radio--low">
            <label htmlFor="low" className="radios__radio__label">
              Low
            </label>
            <input
              type="radio"
              id="low"
              name="priority"
              value="low"
              checked={todo.priority === "low"}
              onChange={(e) => handleChangePriority(e.target.value as Priority)}
            />
          </div>

          <div className="radios__radio  radios__radio--medium">
            <label htmlFor="medium" className="radios__radio__label">
              Medium
            </label>
            <input
              type="radio"
              id="medium"
              name="priority"
              value="medium"
              checked={todo.priority === "medium"}
              onChange={(e) => handleChangePriority(e.target.value as Priority)}
            />
          </div>

          <div className="radios__radio  radios__radio--high">
            <label htmlFor="high" className="radios__radio__label">
              High
            </label>
            <input
              type="radio"
              id="high"
              name="priority"
              value="high"
              checked={todo.priority === "high"}
              onChange={(e) => handleChangePriority(e.target.value as Priority)}
            />
          </div>
        </div>
      </div>
      <div className="form__button">
        <button
          type="submit"
          className={` ${
            validForm.disabledBtn
              ? "form__button__btn--disabled"
              : "form__button__btn"
          }`}
          disabled={validForm.disabledBtn}
        >
          {validForm.disabledBtn ? "👎" : "👍"} Create
        </button>
      </div>
    </form>
  );
}
