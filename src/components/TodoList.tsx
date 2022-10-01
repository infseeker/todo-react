import Todo from '../models/Todo';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/stores';


const TodoList = () => {
  const { todoStore } = useStore();

  const toggleCompleted = (todo: Todo): void => {
    todo.completed = !todo.completed;
    todoStore.updateTodo(todo);
  };

  let todos: Todo[] = [];

  switch(todoStore.currentFilter) {
    case todoStore.Filters.All:
      todos = todoStore.all;
      break;

    case todoStore.Filters.Incomplete:
      todos = todoStore.incomplete;
      break;

    case todoStore.Filters.Completed:
      todos = todoStore.completed;
      break;
  }

  const todoEls = todos.map((todo: Todo) => (
    <li key={todo.id?.toString()}>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={() => toggleCompleted(todo)}
        className={todo.completed ? 'completed' : 'incomplete'}
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
