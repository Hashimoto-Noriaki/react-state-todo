//ユーザーがTodoを入力し、追加するためのコンポーネント、ContextAPIを使ってaddTodo関数にアクセスし、新しいTodoを追加
import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoInput = () => {
    const [input, setInput] = useState('');
    const { addTodo } = useContext(TodoContext);

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