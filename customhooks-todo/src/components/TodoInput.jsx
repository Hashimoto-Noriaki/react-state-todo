//Todoを入力し、追加するためのコンポーネントです。このコンポーネントはカスタムフックのaddTodoを使用して、新しいTodoを追加
import React, { useState } from 'react';
import { useTodo } from '../hooks/useTodo';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodo();

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
