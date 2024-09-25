//Todoリスト全体を表示するコンポーネントです。ContextAPIを使って、todosのリストを取得し、表示
import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
