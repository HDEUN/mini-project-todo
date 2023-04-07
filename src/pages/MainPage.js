import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="inner-wrapper">
      <h1>ToDoList</h1>
      <Link to="/list">Start</Link>
      <p>ToDoList By.Daeun</p>
    </div>
  );
}

export default MainPage;