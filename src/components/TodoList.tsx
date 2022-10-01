import Todo from '../models/Todo';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/stores';


const TodoList = () => {
  const { todoStore } = useStore();

  const toggleCompleted = (todo: Todo): void => {
    todo.completed = !todo.completed;
    todoStore.updateTodo(todo);
  };

  const todoEls = todoStore.filtered.map((todo: Todo) => (
    <li key={todo.id?.toString()}>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={() => toggleCompleted(todo)}
        className={todo.completed ? 'completed' : undefined}
      />

      {todo.title}

      <button
        onClick={() => {
          todoStore.deleteTodo(todo);
        }}
      >
        Remove
      </button>
    </li>
  ));

  return (
    <section className="todo-list">
      <ul>{todoEls}</ul>
    </section>
  );
};

export default observer(TodoList);
