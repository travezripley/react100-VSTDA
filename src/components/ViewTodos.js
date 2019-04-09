import React, { Component } from 'react'
import { TodoItems } from './TodoItems';
import { EmptyListGreeting } from './EmptyListGreeting';

// "child" of APP

export class ViewTodos extends React.Component {
  constructor(props) {
    super(props);
  }

  emptyTodosOrNot(todoslength) {
    if (todoslength == 0) {
      return <EmptyListGreeting />
    } else {
      return <TodoItems todos={this.props.todos} />
    }
  }
  render() {
    return (

      <div className='col-md-8 ' >
        <div className=' panel panel-default ' >
          <div className=' panel-heading ' >View Todos </div>
          <div className=' panel-body ' >

            {/* This function below - Displays the "EmptyListGreeting or Todo List*/}

            {this.emptyTodosOrNot(this.props.todos.length)}
          </div>
        </div>
      </div>
    );
  }
}
