import React from "react";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../store/feature/login/LoginSlice";
function LoginComponents() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>login</h1>
      <button
        onClick={() => {
          dispatch(loginAction({ name: "omer", surname: "sorhun" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logoutAction());
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default LoginComponents;
