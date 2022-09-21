import React from "react";
import ThemeComponent from "./components/ThemeComponent";
import ProfileComponent from "./components/ProfileComponent";
import LoginComponents from "./components/LoginComponents";
import TodoComponent from "./components/TodoComponent";
import TodoListComponent from "./components/TodoListComponent";
function App() {
  return (
    <div>
      <LoginComponents />
      <ProfileComponent />
      <ThemeComponent />
      <TodoComponent />
      <TodoListComponent />
    </div>
  );
}

export default App;
