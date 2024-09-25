//アプリケーション全体のメインコンポーネントです。TodoProviderでアプリ全体をラップし、TodoInputとTodoListをレンダリング
import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

const App = () => {
  return(
    <TodoProvider>
      <div>
      <h1>Todo List with Context API</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App;
