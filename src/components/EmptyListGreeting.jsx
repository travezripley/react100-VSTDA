import React, { Component } from 'react';
import { TodoItems } from './TodoItems';

export class EmptyListGreeting extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='alert alert-info'>
        <p><strong>Nothing to do? Are you sure you have finished all your chores?</strong></p>
        <p>Add an item to your todo list on the left, Step your game up dawg!</p>
      </div>
    );
  }
}

