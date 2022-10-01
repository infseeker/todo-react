import { observer } from "mobx-react-lite";
import { useStore } from "../stores/stores"

const TodoFilters = () => {
  const { todoStore } = useStore();

  const filters = Object.values(todoStore.Filters).map((filter) => (
    <li
      className={todoStore.currentFilter === filter ? 'active' : undefined}
      key={filter}
      onClick={() => {
        todoStore.setFilter(filter);
      }}
    >
      {filter}
    </li>
  ));

  return (
    <section className="todo-filters">
      <ul>{filters}</ul>
    </section>
  );
}

export default observer(TodoFilters);

