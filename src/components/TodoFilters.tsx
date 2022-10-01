import { observer } from "mobx-react-lite";
import { useStore } from "../stores/stores"

const TodoFilters = () => {
  const { todoStore } = useStore();

  const filters = Object.values(todoStore.Filters).map((filter) => (
    <span
      className={todoStore.currentFilter === filter ? 'active' : undefined}
      key={filter}
      onClick={() => {
        todoStore.setFilter(filter);
      }}
    >
      {filter}
    </span>
  ));

  return <section className="todo-filters">{filters}</section>;
}

export default observer(TodoFilters);

