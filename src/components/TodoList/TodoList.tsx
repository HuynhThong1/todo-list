import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  status: boolean;
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (id: string, text: string) => void;
  onChange: (status: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const [flag, setFlag] = useState<Boolean>(false);
  const [editId, setEditId] = useState<string>("");
  const [editText, setEditText] = useState<string>("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    flag && props.onUpdateTodo(editId, editText);
    console.log("alo", event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  useEffect(() => {
    if (props.status) {
      setFlag(false);
      props.onChange(false);
    }
  }, [props]);
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          {flag && todo.id === editId ? (
            <>
              <form onSubmit={submitHandler}>
                <input type="text" value={editText} onChange={handleChange} />
                <button type="submit">save</button>
              </form>
            </>
          ) : (
            <span>{todo.text}</span>
          )}

          <button
            onClick={() => {
              setEditId(todo.id);
              setEditText(todo.text);
              setFlag((prev) => (prev = true));
            }}
          >
            Edit
          </button>
          <Button onDeleteTodo={props.onDeleteTodo} todoId={todo.id} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
