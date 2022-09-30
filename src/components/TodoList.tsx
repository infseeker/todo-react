import Todo from "../models/Todo";
import TodoForm from "./TodoForm";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/stores"

const TodoList = () => {
  const  {todoStore} = useStore();

  const toggleCompleted = (todo: Todo):void => {
    todo.completed = !todo.completed;
    todoStore.updateTodo(todo);
  }

  const todos = todoStore.todos.map((todo: Todo) => (
    <li key={todo.id?.toString()}>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={() => toggleCompleted(todo)}
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
      <ul>{todos}</ul>
    </section>
  );
}

export default observer(TodoList);

