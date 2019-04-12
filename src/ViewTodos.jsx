import React from 'react';
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
      return <TodoItems todos={this.props.todos}
        handleEditClick={this.props.handleEditClick}
        handleDeleteClick={this.props.handleDeleteClick}
        updateEditingTodoText={this.props.updateEditingTodoText}
        updateEditingPriority={this.props.updateEditingPriority}
        updateEditingSaveClick={this.props.updateEditingSaveClick}
        updateDeleteClick={this.props.updateDeleteClick}
        updateFormCheckboxInput={this.props.updateFormCheckboxInput} />

    }
  }
  render() {
    return (

      <div className='col-md-8' >
        <div className=' panel panel-default ' >
          <div className=' panel-heading ' >View Todos</div>
          <div className=' panel-body ' >

            {/* This function below - Displays the "EmptyListGreeting or Todo List*/}

            {this.emptyTodosOrNot(this.props.todos.length)}
          </div>
        </div>
      </div>
    );
  }
}
