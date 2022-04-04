import React, { useState } from 'react';

// router なども使用することができる
// import { Route } from "react-router-dom";

/**
 * components
 */
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

/**
 * models
 */
import { Todo } from './models/todo';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// FC = functionComponent
const App: React.FC = () => {
  /**
   * const [val1, val2];
   * は、
   * const val1;
   * const val2;
   * と同義
   */
  const [todos, setTodos] = useState<Todo[]>([]);

  // submit ボタンが押されて登録する際の処理
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos, // state 更新処理前のデータを反映
      {
        id: todos.length + 1,
        text: text,
      },
    ]);
  };

  // delete ボタンが押されて削除する際の処理
  const todoDeleteHandler = (todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
