import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from './pages/MainPage';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route exact path='/' element={<MainPage />}></Route>
          <Route path='/list' element={<TodoList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
