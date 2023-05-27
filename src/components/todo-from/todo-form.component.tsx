import { FormEvent, useEffect, useState } from "react";

import { initialState } from "../../data/constants.data";
import {
  dateFormatter,
  genId,
  removeExtraSpaces,
} from "../../helpers/utilities.helper";
import { useTodos } from "../../hooks/useHooks.hook";
import { Priority, Todo } from "../../interfaces/todos.interfaces";

import "./todo-form.component.css";

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState<Todo>(initialState);

  const [validForm, setValidForm] = useState({
    maxMinLength: false,
    disabledBtn: false,
    invalidInput: false,
  });

  //Desempaquetando el contexto
  const { handleAddTodo, handleEditTodo, todo } = useTodos();

  //Validando el formulario
  useEffect(() => {
    const maxMinLength =
      newTodo.name !== "" &&
      newTodo.name.length <= 10 &&
      newTodo.name.trim().length !== 0;

    const invalidInput =
      newTodo.name !== "" && newTodo.name.trim().length === 0;

    const required = !newTodo.priority || !newTodo.name;

    setValidForm((prevState) => ({
      ...prevState,
      maxMinLength,
      disabledBtn: required || maxMinLength,
      invalidInput,
    }));
  }, [newTodo.name, newTodo.priority]);

  //Verificando estado del objeto para editarlo
  useEffect(() => {
    setNewTodo((prev) => ({ ...prev, ...todo }));
  }, [todo]);

  //Enviando datos del formulario
  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();

    if (todo.id === 0) {
      const newTodoObj = {
        ...newTodo,
        name: removeExtraSpaces(newTodo.name),
        id: genId(),
        date: dateFormatter(),
        status: false,
      };

      handleAddTodo(newTodoObj);
      setNewTodo(initialState);
      return;
    }
    handleEditTodo(newTodo);
    setNewTodo(initialState);
  };

  const handleCancelEdit = () => {
    setNewTodo(initialState);
  };

  return (
    <form className="form shadow" onSubmit={handleSubmit}>
      {!Object.values(todo).includes("") ? (
        <h2 className="form__title">💡 Editing: "{newTodo.name}"</h2>
      ) : (
        <h2 className="form__title">📝 Add a new Todo</h2>
      )}
      <div className="form__field">
        <label htmlFor="todo" className="form__field__label">
          Name:
        </label>
        {validForm.invalidInput ? (
          <span className="error-validation">Invalid input</span>
        ) : (
          ""
        )}
        {validForm.maxMinLength ? (
          <span className="error-validation">Need at least 10 characters</span>
        ) : (
          ""
        )}
        <input
          type="text"
          className="form__field__input"
          id="todo"
          maxLength={30}
          value={newTodo.name}
          placeholder="Write here, max 30 characters at least 10 👽"
          onChange={(e) =>
            setNewTodo((prevTodo) => ({ ...prevTodo, name: e.target.value }))
          }
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
              checked={newTodo.priority === "low"}
              onChange={(e) =>
                setNewTodo((prevTodo) => ({
                  ...prevTodo,
                  priority: e.target.value as Priority,
                }))
              }
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
              checked={newTodo.priority === "medium"}
              onChange={(e) =>
                setNewTodo((prevTodo) => ({
                  ...prevTodo,
                  priority: e.target.value as Priority,
                }))
              }
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
              checked={newTodo.priority === "high"}
              onChange={(e) =>
                setNewTodo((prevTodo) => ({
                  ...prevTodo,
                  priority: e.target.value as Priority,
                }))
              }
            />
          </div>
        </div>
      </div>
      <div className="form__button">
        {!Object.values(todo).includes("") && (
          <button
            className="form__button__btn form__button__btn--cancel"
            onClick={handleCancelEdit}
          >
            🙅‍♂️ Cancel
          </button>
        )}

        <button
          type="submit"
          className={` ${
            validForm.disabledBtn
              ? "form__button__btn--disabled"
              : "form__button__btn form__button__btn--go"
          }`}
          disabled={validForm.disabledBtn}
        >
          {validForm.disabledBtn ? "👎" : "👍"}{" "}
          {!Object.values(todo).includes("") ? "Edit" : "Create"}
        </button>
      </div>
    </form>
  );
}
