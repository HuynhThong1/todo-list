import React, { useState } from "react";
import "./Button.css";

interface ButtonProps {
  todoId: string;
  onDeleteTodo: (id: string) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    // do something async
    setTimeout(() => {
      setIsDeleting(false);
      setIsDeleted(true);
      setTimeout(() => {
        setIsDeleted(false);
        props.onDeleteTodo(props.todoId);
      }, 1250);
    }, 2500);
  };

  return (
    <button
      onClick={handleClick}
      className={isDeleting || isDeleted ? "deleting btn-delete" : "btn-delete"}
      disabled={isDeleting || isDeleted}
    >
      {/* <span className="button-text">
        {isDeleting || isDeleted ? "Deleting" : "Delete"}
      </span> */}
      <span className="animation">
        <span className="balls"></span>
        <span className="lid"></span>
        <span className="can">
          <span className="filler"></span>
        </span>
      </span>
    </button>
  );
};

export default Button;
