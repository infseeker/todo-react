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
    <li className="list-group-item" key={todo.id?.toString()}>
      <i
        onClick={() => toggleCompleted(todo)}
        className={`todo-check bx ${todo.completed ? 'bx-check-circle' : 'bx-circle'}`}
      ></i>

      <span className={`todo-title ${todo.completed ? 'completed' : undefined}`}>{todo.title}</span>

      <i className='bx bx-trash-alt'
        onClick={() => {
          todoStore.deleteTodo(todo);
        }}
      >
      </i>
    </li>
  ));

  return (
    <section className="todo-list">
      {todoEls.length === 0 && (
        <div className="todo-empty">There is nothing here yet</div>
      )}
      <ul className="list-group list-group-flush">{todoEls}</ul>
    </section>
  );
};

export default observer(TodoList);
