import { Component } from 'react';
import './assets/scss/App.scss';
import TodoList from './components/TodoList';


export default class App extends Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <h3>React Todo App</h3>
        
        <TodoList />
      </div>
    );
  }
}
