import { useEffect, useState } from "react";
import { Todo } from "../interfaces/todos.interfaces";

export function useValidation(newTodo: Todo) {
  const [validForm, setValidForm] = useState({
    maxMinLength: false,
    disabledBtn: false,
    invalidInput: false,
  });

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

  return validForm;
}
