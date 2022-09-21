import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../store/feature/theme/ThemeSlice";
function ThemeComponent() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>theme</h1>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(setTheme(color));
        }}
      >
        Set color
      </button>
    </div>
  );
}

export default ThemeComponent;
