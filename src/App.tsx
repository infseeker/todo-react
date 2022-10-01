import { Component } from 'react';
import TodoFilters from './components/TodoFilters';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


export default class App extends Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <header className='header'>
          <h3>
            <a href="https://github.com/infseeker">@infseeker</a> React Todo App
          </h3>
        </header>

        <TodoForm />
        <TodoFilters />
        <TodoList />

        <footer className='footer'>Made with React + MobX, Flask and PostgreSQL</footer>
      </div>
    );
  }
}
