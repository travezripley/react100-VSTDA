import React, { Component } from 'react';
//This is a "child" component of ViewTodos

class Todoitems extends React.Component {
  constructor(props);
  super(props);
}

render() {

  console.log(this.props.Todos)
  return (
    <div>
      <h1>Todo Items.</h1>
    </div>
  )
}
}

export default Todoitem;
