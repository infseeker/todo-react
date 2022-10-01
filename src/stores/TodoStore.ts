import { makeAutoObservable, runInAction } from 'mobx';
import Todo from '../models/Todo';
import TodoService from '../services/TodoService';

enum Filters {
  All,
  Incomplete,
  Completed
}

export default class TodoStore {
  todos: Todo[] = [];

  readonly Filters = Filters;
  currentFilter: number = this.Filters.All;

  get all(): Todo[] {
    return this.todos;
  }

  get incomplete(): Todo[] {
    return this.todos.filter(t => !t.completed);
  }

  get completed(): Todo[] {
    return this.todos.filter(t => t.completed);
  }

  constructor() {
    makeAutoObservable(this);
    this.loadTodos();
  }

  async loadTodos() {
    const loadedTodos = await TodoService.getTodos().then((r) => r.data);

    runInAction(() => {
      this.todos = loadedTodos as Todo[];
    });
  }

  async addTodo(title: string) {
    if (!title) return;
    const createdTodo: Todo = await TodoService.createTodo(title).then(r => r.data as Todo);

    runInAction(() => {
      this.todos.push(createdTodo);
    });
  }

  async updateTodo(todo: Todo) {
    const updatedTodo: Todo = await TodoService.updateTodo(todo).then(r => r.data as Todo);

    runInAction(() => {
      Object.assign(updatedTodo, todo);
    });
  }

  async deleteTodo(todo: Todo) {
    await TodoService.deleteTodo(todo).then(r => r.data as Todo);

    runInAction(() => {
      this.todos = this.todos.filter(t => t !== todo);
    });
  }
}
