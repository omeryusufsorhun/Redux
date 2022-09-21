import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, todoCompleted } from "../store/feature/todo/TodoSlice";
function TodoListComponent() {
  const todoList = useSelector((state) => state.todoReducer.todos);
  const theme = useSelector((state) => state.themeReducer.value);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <h1>todo list component</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <span>{todo.title} </span>
            <span>{String(todo.completed)} </span>
            <button onClick={onDelete(index)}>delete</button>
            <button>completed</button>
            <button>
              {String(todo.completed) === "false" ? "in progress" : "completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListComponent;
