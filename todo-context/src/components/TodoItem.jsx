//個々のTodoアイテムを表示し、削除できるコンポーネントです。removeTodoをContextAPIから取得し、特定のTodoを削除
import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo, index }) => {
  const { removeTodo } = useContext(TodoContext);

  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
