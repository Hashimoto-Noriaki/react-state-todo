//カスタムフックでTodoリストのロジック（追加・削除）を管理します。このファイルには、ReactのuseStateやuseCallbackフックを使って、状態を管理
import { useState, useCallback } from 'react';

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  // Todoを追加する関数
  const addTodo = useCallback((todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }, []);

  // Todoを削除する関数
  const removeTodo = useCallback((index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }, []);

  return {
    todos,
    addTodo,
    removeTodo,
  };
};
