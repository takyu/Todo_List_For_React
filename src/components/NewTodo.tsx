import React, { useRef } from 'react';

/**
 * css
 */
import './NewTodo.css';
interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const clearInputs = () => {
  const $input = document.querySelector('#todo-text')! as HTMLInputElement;

  $input.value = '';
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  /**
   * 最初に読み込まれ、component がレンダリングされていない時点では
   * input の DOM は、null である。
   * → ゆえに、初期値は null で設定しておく
   */
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (!enteredText) {
      return;
    }

    props.onAddTodo(enteredText);
    clearInputs();
  };
  return (
    <form onSubmit={todoSubmitHandler} id="form-control">
      <div>
        <label htmlFor="todo-text">Todoの内容</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <div id="add-btn">
        <button type="submit">Todoの追加</button>
      </div>
    </form>
  );
};

export default NewTodo;
