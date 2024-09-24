import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <h1>Todo List with Redux</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
