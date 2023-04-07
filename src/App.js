import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      {/* 리스트 컴포넌트 랜더링 */}
      <TodoList />
    </div>
  );
}

export default App;
