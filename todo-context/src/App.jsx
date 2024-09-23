import React, { useContext, useState } from 'react';
import { TodoContext, TodoProvider } from './context/TodoContext';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

const App = () => (
  <TodoProvider>
    <h1>Todo List</h1>
    <TodoInput />
    <TodoList />
  </TodoProvider>
);

export default App;
