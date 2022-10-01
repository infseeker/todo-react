import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { useStore } from "../stores/stores"

const TodoForm = () => {
  const { todoStore } = useStore();
  const [title, setTitle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    todoStore.addTodo(title.trim());
    setTitle('');
    inputRef.current?.focus();
  };

  return (
    <section className="todo-form">
      <input
        type="text"
        className="form-control"
        ref={inputRef}
        value={title}
        placeholder={'What do we do?'}
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            addTodo();
          }
        }}
      />

      <i className="bx bxs-plus-circle todo-form-button" onClick={addTodo}></i>
    </section>
  );
}

export default observer(TodoForm);

