import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { useStore } from "../stores/stores"

const TodoForm = () => {
  const { todoStore } = useStore();
  const [title, setTitle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    todoStore.addTodo(title);
    setTitle('');
    inputRef.current?.focus();
  };

  return (
    <section className="todo-form">
      <input
        type="text"
        ref={inputRef}
        value={title}
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

      <button type="button" onClick={addTodo}>
        Add todo
      </button>
    </section>
  );
}

export default observer(TodoForm);

