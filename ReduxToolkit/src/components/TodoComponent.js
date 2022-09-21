import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/feature/todo/TodoSlice";

function TodoComponent() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const todoAdded = () => {
    dispatch(addTodo(title));
    setTitle("");
  };
  return (
    <div>
      <h1>todo component</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={todoAdded}>Added todo</button>
    </div>
  );
}

export default TodoComponent;
