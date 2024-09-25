//個々のTodoアイテムを表示するコンポーネントです。カスタムフックのremoveTodoを使用して、特定のTodoを削除
import React from 'react';
import { useTodo } from '../hooks/useTodo';

const TodoItem = ({ todo, index }) => {
  const { removeTodo } = useTodo();

  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
