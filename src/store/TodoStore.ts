import { makeAutoObservable, runInAction } from 'mobx';
import Todo from '../models/Todo';
import TodoService from '../services/TodoService';

export default class TodoStore {
  todos: Todo[] = [];
  newTodo: string = '';
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
    this.fetchTodos();
  }

  async fetchTodos() {
    this.isLoading = true;
    const fetchedTodos = await TodoService.getTodos().then((r) => r.data);

    runInAction(() => {
      this.todos = fetchedTodos;
    });
  }
}
