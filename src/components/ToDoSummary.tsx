import { inject, observer } from 'mobx-react';
import * as React from 'react';
import Store from './../store/Store';

@inject('Store')
@observer
export default class ToDoSummary extends React.Component<
  { Store?: Store },
  {}
> {
  render() {
    const toDos = this.props.Store?.toDos.length ?? 0;
    const completedToDos =
      this.props.Store?.toDos.filter((x) => x.completed).length ?? 0;

    return (
      <section style={{ fontSize: 'larger' }}>
        ToDo status {toDos - completedToDos} ToDo(s) pending from{' '}
        {toDos} ToDo(s)
      </section>
    );
  }
}