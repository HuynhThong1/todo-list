import React, { useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler} className="form-control">
      <div className="input-text">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
        <button className="btn btn-add" type="submit">
          <IoIosAddCircleOutline />
        </button>
      </div>
      {/* <button type="submit">ADD TODO</button> */}
    </form>
  );
};

export default NewTodo;
