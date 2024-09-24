//Reduxのstoreを定義し、アプリ全体で使えるように
import { createStore } from 'redux';
import { todoReducer } from './reducers/todoReducer';

// Redux storeの作成
export const store = createStore(
    todoReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
