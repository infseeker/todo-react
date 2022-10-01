import { makeAutoObservable, runInAction } from 'mobx';
import Todo from '../models/Todo';
import TodoService from '../services/TodoService';

enum Filters {
  All = 'All',
  Incomplete = 'Incomplete',
  Completed = 'Completed'
}

export default class TodoStore {
  constructor() {
    makeAutoObservable(this);
    this.loadTodos();
  }

  todos: Todo[] = [];

  readonly Filters = Filters;
  currentFilter: string = this.Filters.All;

  setFilter(filter: string) {
    this.currentFilter = filter
  }

  get filtered(): Todo[] {
    switch (this.currentFilter) {
      case this.Filters.All:
        return this.todos;

      case this.Filters.Incomplete:
        return this.todos.filter((t) => !t.completed);

      case this.Filters.Completed:
        return this.todos.filter((t) => t.completed);

      default:
        return this.todos;
    }
  }

  async loadTodos() {
    const loadedTodos = await TodoService.getTodos().then((r) => r.data);

    runInAction(() => {
      this.todos = loadedTodos as Todo[];
    });
  }

  async addTodo(title: string) {
    if (!title) return;
    const createdTodo: Todo = await TodoService.createTodo(title).then(
      (r) => r.data as Todo
    );

    runInAction(() => {
      this.todos.push(createdTodo);
    });
  }

  async updateTodo(todo: Todo) {
    const updatedTodo: Todo = await TodoService.updateTodo(todo).then(
      (r) => r.data as Todo
    );

    runInAction(() => {
      Object.assign(updatedTodo, todo);
    });
  }

  async deleteTodo(todo: Todo) {
    await TodoService.deleteTodo(todo).then((r) => r.data as Todo);

    runInAction(() => {
      this.todos = this.todos.filter((t) => t !== todo);
    });
  }
}
