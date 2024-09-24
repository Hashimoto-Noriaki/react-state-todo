//アクションのタイプと、Todoリストにアイテムを追加したり、削除するアクションを定義
// Action types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Action creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id
});
