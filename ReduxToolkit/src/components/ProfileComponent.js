import React from "react";
import { useSelector } from "react-redux";
function ProfileComponent() {
  const theme = useSelector((state) => state.themeReducer.value);

  const user = useSelector((state) => state.loginReducer.value);
  return (
    <div style={{ color: theme }}>
      <h1>profile component</h1>
      <p>name :{user.name} </p>
      <p>surname :{user.surname} </p>
    </div>
  );
}

export default ProfileComponent;
