import React from 'react';

/**
 * models
 */
import { Todo } from "../models/todo";

/**
 * css
 */
import './TodoList.css';

type TodoListProps = {
  items: Todo[];
  onDeleteTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <div>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              削除
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
