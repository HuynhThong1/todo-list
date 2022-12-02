import React, { useState } from "react";
import NewTodo from "./components/NewToDo/NewToDo";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./models/todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // let status: boolean = false;
  const [status, setStatus] = useState<boolean>(false);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const todoUpdateHandler = (todoId: string, text: string) => {
    // eslint-disable-next-line array-callback-return
    todos.map((todo) => {
      if (todo.id === todoId) {
        todo.text = text;
        setStatus(true);
      }
    });
    // setStatus(false);
  };

  const updateStatus = (status: boolean) => {
    setStatus(status);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList
        items={todos}
        status={status}
        onDeleteTodo={todoDeleteHandler}
        onUpdateTodo={todoUpdateHandler}
        onChange={updateStatus}
      />
    </div>
  );
};

export default App;
