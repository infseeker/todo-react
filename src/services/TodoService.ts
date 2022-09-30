import ServerData from '../models/ServerData';
import Todo from '../models/Todo';

const TODO_API_URL = 'https://infseeker-todo.tk/todo/api/react';

export default class Service {
  static async getTodos(): Promise<ServerData> {
    return await fetch(TODO_API_URL).then((r) => r.json());
  }

  static async createTodo(title: string): Promise<ServerData> {
    return await fetch(TODO_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title }),
    }).then((r) => r.json());
  }

  static async updateTodo(todo: Todo): Promise<ServerData> {
    return await fetch(`${TODO_API_URL}/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    }).then((r) => r.json());
  }

  static async deleteTodo(todo: Todo): Promise<ServerData> {
    return await fetch(`${TODO_API_URL}/${todo.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    }).then((r) => r.json());
  }
}
