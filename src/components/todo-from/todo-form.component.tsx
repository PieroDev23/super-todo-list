import { FormEvent, useEffect, useState } from "react";

import { initialState } from "../../data/constants.data";
import { dateFormatter, genId } from "../../helpers/utilities.helper";
import { useTodos } from "../../hooks/useHooks.hook";
import { Priority, Todo } from "../../interfaces/todos.interfaces";

import "./todo-form.component.css";

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState<Todo>(initialState);
  const [validForm, setValidForm] = useState({
    invalidInput: false,
    disabledBtn: false,
  });

  //Desempaquetando el contexto
  const { handleAddTodo, handleEditTodo, todo } = useTodos();
  //Validando el formulario
  useEffect(() => {
    const maxMinLength = newTodo.name !== "" && newTodo.name.length <= 10;
    const required = !newTodo.priority || !newTodo.name;

    setValidForm((prevState) => ({
      ...prevState,
      invalidInput: maxMinLength,
      disabledBtn: required || maxMinLength,
    }));
  }, [newTodo.name, newTodo.priority]);

  //Verificando estado del objeto para editarlo
  useEffect(() => {
    setNewTodo((prev) => ({ ...prev, ...todo }));
  }, [todo]);

  //Actualizando el estado del todo
  const handleChangeName = (name: string) => {
    setNewTodo((prevTodo) => ({ ...prevTodo, name }));
  };

  const handleChangePriority = (priority: Priority) => {
    setNewTodo((prevTodo) => ({ ...prevTodo, priority }));
  };

  //Enviando datos del formulario
  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();

    if (todo.id === 0) {
      const newTodoObj = {
        ...newTodo,
        id: genId(),
        date: dateFormatter(),
        status: false,
      };

      if (Object.values(newTodoObj).includes("")) {
        return;
      }

      handleAddTodo(newTodoObj);
      setNewTodo(initialState);
      return;
    }

    handleEditTodo(newTodo);
    setNewTodo(initialState);
  };

  return (
    <form className="form shadow" onSubmit={handleSubmit}>
      {!Object.values(todo).includes("") ? (
        <h2 className="form__title">💡 Editing: "{todo.name.trim()}"</h2>
      ) : (
        <h2 className="form__title">📝 Add a new Todo</h2>
      )}
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
          value={newTodo.name}
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
              checked={newTodo.priority === "low"}
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
              checked={newTodo.priority === "medium"}
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
              checked={newTodo.priority === "high"}
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
          {validForm.disabledBtn ? "👎" : "👍"}{" "}
          {!Object.values(todo).includes("") ? "Edit" : "Create"}
        </button>
      </div>
    </form>
  );
}
