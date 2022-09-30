import { makeAutoObservable, runInAction } from 'mobx';
import Todo from '../models/Todo';
import TodoService from '../services/TodoService';

export default class TodoStore {
  todos: Todo[] = [];
  // isLoading = true;

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
