//Todoリスト全体を表示するコンポーネントです。カスタムフックのtodosを使ってTodoリストを取得し、それぞれのTodoをリスト表示
import React from 'react';
import { useTodo } from '../hooks/useTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
