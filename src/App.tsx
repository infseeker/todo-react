import { Component } from 'react';
import TodoFilters from './components/TodoFilters';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


export default class App extends Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <div className="container-sm bg-gray-50 dark bg-gray-900">
          <div className="card mt-3">
            <div className="card-body">
              <header className="header">
                <h4>
                  <a href="https://github.com/infseeker">@infseeker</a> React
                  Todo App
                </h4>
              </header>

              <TodoForm />
              <TodoFilters />
              <TodoList />

              <footer className="footer">
                <small>
                  Made with <a href="https://reactjs.org/">React</a> +{' '}
                  <a href="https://mobx.js.org/">MobX</a>,{' '}
                  <a href="https://flask.palletsprojects.com/">Flask</a> and{' '}
                  <a href="https://www.postgresql.org/">PostgreSQL</a>
                </small>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
