import { Colors } from "../../data/constants.data";
import { reFormatDate } from "../../helpers/utilities.helper";
import { Todo as TodoInterface } from "../../interfaces/todos.interfaces";

import "./todo.component.css";

interface TodoProps {
  todo: TodoInterface;
  order: number;
}

export default function Todo({ todo, order }: TodoProps) {
  const { name, priority, date, status } = todo;

  return (
    <div className="todo shadow">
      <div className="todo__header">
        <div className="todo__data">
          <p className="todo__data__paragraph todo__data__title">
            <span className="todo__data__order">#{order}</span> {name}
          </p>
          <p className="todo__data__paragraph todo__data__date">
            {reFormatDate(date)}{" "}
            <span className="todo__data__status">
              {status ? "(completed)" : "(not completed)"}
            </span>
          </p>
        </div>
        <div className="todo__data__prio">
          <span
            className="material-symbols-outlined todo__data__prio__icon"
            style={{ color: Colors[priority] }}
          >
            radio_button_checked
          </span>
        </div>
      </div>
      <div className="todo__footer">
        <button type="button" className="btn-action btn-action--complete">
          <span className="material-symbols-outlined">task</span>
        </button>

        <button type="button" className="btn-action btn-action--edit">
          <span className="material-symbols-outlined">edit_note</span>
        </button>

        <button type="button" className="btn-action btn-action--delete">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
