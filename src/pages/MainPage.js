import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TodoLogo from '../images/todoLogo.png';
import './MainPage.css';
import { AppTitle } from "./styled";

const StartLink = styled(Link)`
  display: inline-block;
  text-align: center;
  padding : 14px 60px;
  border-radius: 50px;
  background: linear-gradient(to left, #FF495F, #FF9254);
  color: white;
  font-weight: 900;
  box-shadow: 0px 0px 15px #f95c6f52;
  margin-top: 80px;
`

function MainPage() {
  return (
    <div className="inner-wrapper">
      <div className="main-page">
        <img src={TodoLogo} alt="TodoLogo" />
        <AppTitle center mt20>ToDoList</AppTitle>
        <StartLink to="/list">START<i>→</i></StartLink>
      </div>
      
      <div className="caption">
        <p>ToDoList By.Daeun</p>
      </div>
    </div>
  );
}

export default MainPage;