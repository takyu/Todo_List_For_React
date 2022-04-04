import React from 'react';

/**
 * components
 */
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// FC = functionComponent
const App: React.FC = () => {
  const todos = [
    {
      id: 't1',
      text: 'typescript section1',
    },
  ];
  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
