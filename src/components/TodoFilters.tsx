import { observer } from "mobx-react-lite";
import { useStore } from "../stores/stores"

const TodoFilters = () => {
  const { todoStore } = useStore();

  return (
    <section className="todo-filters">
      <span onClick={() => {
        todoStore.currentFilter = todoStore.Filters.All;
      }}>All</span>
      <span onClick={() => {
        todoStore.currentFilter = todoStore.Filters.Incomplete;
      }}>Incomplete</span>
      <span onClick={() => {
        todoStore.currentFilter = todoStore.Filters.Completed;
      }}>Completed</span>
    </section>
  );
}

export default observer(TodoFilters);

