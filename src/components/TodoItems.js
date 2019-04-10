import React, { Component } from 'react'
//This is a "child" component of ViewTodos

const childTitle = "Todo Items";

class Todoitems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div>
        <h1 className="App-Title">{childTitle}</h1>
      </div>
    );
  }

}

export default Todoitem;
