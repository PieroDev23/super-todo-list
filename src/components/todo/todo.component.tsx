import { Colors } from "../../data/constants.data";
import { useTodos } from "../../hooks/useTodos.hook";
import { useScore } from "../../hooks/useScore.hook";
import { Todo as TodoInterface } from "../../interfaces/todos.interfaces";

import "./todo.component.css";

interface TodoProps {
  todo: TodoInterface;
  order: number;
}

export default function Todo({ todo, order }: TodoProps) {
  const { name, priority, date, status } = todo;
  const { handleSetTodo, handleRemoveTodo, handleChangeFlagTodo } = useTodos();
  const { handleIncrementScore } = useScore();

  const completedTodo = (currentTodo: TodoInterface, score: number) => {
    handleChangeFlagTodo(currentTodo);

    if (currentTodo.status === false) {
      handleIncrementScore(score);
      return;
    }

    handleIncrementScore(-score);
  };

  return (
    <div className="todo shadow">
      <div className="todo__header">
        <div className="todo__data">
          <p
            className={`todo__data__paragraph todo__data__title ${
              status ? "todo__data__title--lined" : ""
            }`}
          >
            <span className="todo__data__order">#{order}</span> {name}
          </p>
          <p className="todo__data__paragraph todo__data__date">
            {date}{" "}
            <span className="todo__data__status">
              {status ? "(completed)" : "(not completed)"}
            </span>
          </p>
        </div>
        <div className="todo__data__prio">
          <span
            className="material-symbols-outlined todo__data__prio__icon"
            style={{ color: Colors[priority as number] }}
          >
            radio_button_checked
          </span>
        </div>
      </div>
      <div className="todo__footer">
        <button
          type="button"
          className="btn-action btn-action--complete"
          onClick={() => completedTodo(todo, 10)}
        >
          <span className="material-symbols-outlined">task</span>
        </button>

        <button
          type="button"
          className="btn-action btn-action--edit"
          onClick={() => handleSetTodo(todo)}
        >
          <span className="material-symbols-outlined">edit_note</span>
        </button>

        <button
          type="button"
          className="btn-action btn-action--delete"
          onClick={() => handleRemoveTodo(todo)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
