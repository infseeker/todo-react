import { action, configure, observable } from 'mobx';
import { ServerData } from '../models/ServerData';
import ToDo from '../models/ToDo';

configure({ enforceActions: 'always' });

export default class ToDoStore {
  @observable
  toDos: ToDo[] = [];

  private todoAPI = 'https://infseeker-todo.tk/todo/api/react';

  @action.bound
  async init() {
    const response = await fetch(this.todoAPI);
    const serverData: ServerData = await response.json();
    const toDos: ToDo[] = serverData.data;
    console.log(toDos)
    this.addToDoToStore(toDos);
  }

  @action.bound
  addToDoToStore(toDos: ToDo[]) {
    this.toDos.length = 0;
    for (let todo of toDos) {
      this.toDos.push(todo);
    }
  }

  @action.bound
  getToDos() {
    return this.toDos;
  }

  @action.bound
  async addToDo(title: string, completed: boolean) {
    let response = await fetch(this.todoAPI, {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ title, completed }),
    });
    let createdToDo = await response.json();
    this.addNewToDoToStore(createdToDo);
  }

  @action.bound
  async addNewToDoToStore(todo: ToDo) {
    this.toDos.push(todo);
  }
}