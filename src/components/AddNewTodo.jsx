import React, { Component } from 'react'
//"child" of App

export class AddNewTodo extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <form className='col-md-4' onSubmit={this.props.handleCreate} >
        <div>

        </div>
      </form>
    )
  }
}
