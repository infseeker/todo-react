import { observer } from "mobx-react-lite";
import Todo from "../models/Todo";
import { useStore } from "../stores"

const TodoList = () => {
  const  {todoStore} = useStore();
  const todos = todoStore.todos.map((todo: Todo) => <li key={todo.id?.toString()}>{todo.title}</li>)
  return <ul>{todos}</ul>;
}

export default observer(TodoList);

