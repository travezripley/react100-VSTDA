import React, { Component } from 'react'
//This is a "child" component of ViewTodos


export class Todoitems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <ul className='list-group list-group-flush'>

        {this.props.todos.map((todo, i) => {
          if (todo.editEnabled == false) {

            return (

              <li key={i} className={this.priorityColorAndIsCompleted(todo.priority, todo.isCompleted)}>

                <input
                  className="form-check-input position-static"
                  type="checkbox"
                  value=" "
                  onClick={e => { this.props.handleFormCheckboxInput(todo.id) }}>
                  {todo.text}

                  <span
                    className='btn btn-link float-right delete-todo'
                    onClick={e => { this.props.handleDeleteClick(todo.id) }}>
                    <span
                      className="glyphicon glyphicon-trash float-right delete-todo"></span>
                  </span>

                  <span
                    className='btn btn-link float-right edit-todo'
                    onClick={e => {this.props.handleEditClick(todo.id)}}>
                    <span
                      className="glyphicon glyphicon-edit float-right delete-todo"></span>
                  </span> </li>)

          }else{
            return(
              
              <li key={i} className={this.priorityColorAndIsCompleted(todo.priority)}>
               
              <div className="form-group">
                  <label name="todo-text-label">Descriptions</label>
                    <textarea
                      name= "todo-text"
                      type= "text"
                      rows= "3"
                      defaultValue={todo.text}
                      className="form-control input-md update-todo-text"
                      onChange={this.props.updatingEditingTodoText}>
                    </textarea>
                </div>
                
                  <div className="form-group">
                    <label name="todo-text-label">Priority</label>
                    <select
                      name="term"
                      className="form-control input-md update-todo-priority"
                      size="3"
                      type="number"

                      onChange={this.props.updatingEditingPriority}>
                      <option value="0">Select a Priority</option>
                      <option value="1">Low Priority</option>
                      <option value="2">Medium Priority</option>
                      <option value="3">High Priority</option>
                    </select>
                  </div>
                <button
                  name="button"
                  className="btn btn-success float-right update-todo"
                  onClick={this.props.handleEditSaveClick}></button>
                </li>
                )
              }
            })
          }
        </ul>
            );

          }

        }