import { Provider } from 'mobx-react';
import * as React from 'react';
import './assets/scss/App.scss';
import ToDoComponent from './components/ToDo';
import Store from './store/Store';
import ToDoSummary from './components/ToDoSummary';

export default class App extends React.Component<{}, {}> {
  private store: Store;

  constructor(props: any) {
    super(props);
    this.store = new Store();
  }

  componentDidMount() {
    this.store.init();
  }

  render() {
    return (
      <div className="App">
        <h3>ToDo App using React and Mobx</h3>

        <Provider Store={this.store}>
          <ToDoComponent />
          <ToDoSummary />
        </Provider>
      </div>
    );
  }
}