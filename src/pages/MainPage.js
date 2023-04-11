import React from "react";
import { Link } from "react-router-dom";
import TodoLogo from '../images/todoLogo.png';
import './MainPage.css';


function MainPage() {
  return (
    <div className="inner-wrapper main-page">
      <img src={TodoLogo} alt="TodoLogo" />
      <h1>ToDoList</h1>
      <Link to="/list">Start</Link>
      <p>ToDoList By.Daeun</p>
    </div>
  );
}

export default MainPage;