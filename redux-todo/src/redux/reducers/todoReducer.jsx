//Todoの状態を管理するReducerを定義、ADD_TODOやREMOVE_TODOのアクションに応じて、状態を更新
import { ADD_TODO, REMOVE_TODO } from '../actions/todoActions';

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload)
      };
    default:
      return state;
  }
};
