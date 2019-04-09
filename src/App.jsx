import React, { Component } from 'react';
//import {AddNewTodo} from './AddNewTodo';
//import {AddNewTodo} from './AddNewTodo';
//import {EmptyListGreeting} from './EmptyListGreeting';

class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'You put on your coat and hat',
        completed: false
      },

      {
        id: 3,
        title: 'Bring in the dog and put out the cat',
        completed: false
      },


    ]
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className='App'>
        <Todos todos={this.state.todos} />
        <div className='page-header'>
          <h1 className='text-white'> Very Simple Todo App </h1>
          <p className='lead text-white'>Track all the Things</p>
        </div>
      </div>
    );
  }
}

export default App;
