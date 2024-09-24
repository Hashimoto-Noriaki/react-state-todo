//個々のTodoアイテムを表示し、削除できるコンポーネント
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/actions/todoActions';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(index));
  };

  return (
    <li>
      {todo}
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;
