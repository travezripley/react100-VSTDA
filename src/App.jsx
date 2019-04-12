import React, { Component } from 'react';
import { AddNewTodo } from './AddNewTodo';
import { EmptyListGreeting } from './EmptyListGreeting';

//this is the Top Level Component - holds state

class App extends Component {
  constructor(props) {
    super(props);


    const todos = [
      {
        text: 'Take out the papers and the trash',
        priority: '1',
        editEnabled: false,
        id: 1,
        isCompleted: false,
        addingText: '',
        addingPriority: '0'
      },

      {
        text: 'Just finish cleaning up your room',
        priority: '2',
        editEnabled: false,
        id: 2,
        isCompleted: false,
        addingText: '',
        addingText: '0'
      },

      {
        text: 'Bring in the dog and put out the cat',
        priority: '3',
        editEnabled: false,
        id: 3,
        isCompleted: false,
        addingText: '',
        addingText: '0'
      }




    ];

    this.state = {
      todos,
      text: '',
      priority: 0,
      editEnabled: false,
      id: 0,
      isCompleted: false,
      addingText: '',
      addingPriority: 0,
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditingSaveClick = this.handleEditingSaveClick.bind(this);
    this.updateEditingPriority = this.updateEditingPriority.bind(this);
    this.updateEditingTodoText = this.updateEditingTodoText.bind(this);
    this.updateCreateTodoText = this.updateCreateTodoText.bind(this);
    this.updateTodoPriority = this.updateTodoPriority.bind(this);
    this.handleFormCheckboxInput = this.handleFormCheckboxInput.bind(this);
  }

  handleCreate(e) {
    e.preventDefault();
    let idStamp = new Date().valueOf();

    if (this.state.addingText == "" || this.state.addingPriority == "0") {

      return alert("Please add a Todo and/or pick a priority")

    } else {

      let todo = {
        text: this.state.addingText,
        priority: this.state.addingPriority,
        editEnabled: false,
        id: idStamp,
        isCompleted: false,
        addingText: '',
        addingPriority: ""
      }

      let todos = [...this.state.todos];

      todos.push(todo);
      this.setState({
        todos
      });

      //resets "text" and "priority" fields to "default" after user submits info

      this.setState({
        text: "",
        priority: 0,
        id: 0,
        isCompleted: false,
        addingText: "",
        addingPriority: "0"
      })

    }
  }

  handleEditClick(id) {
    if (this.state.editEnabled === true) {
      return alert("Hey dawg! You can only edit one TODO at a time!?!");
    }
    for (vari in this.state.todos) {
      if (this.state.todos[i].id == id) {
        var editTodo = this.state.todos[i]
        this.editIndexNum = i;
      }
    }

    let todo = {
      text: editTodo.text,
      priority: editTodo.priority,
      editEnabled: true,
      id: editTodo.id,
      isCompleted: editTodo.isCompleted
    }
    let todos = [this.state.todos];

    todos.splice(this.editIndexNum, 1, todo);
    this.setState({
      todos,
      editEnabled: true
    });
  }

  handleEditingSaveClick(e) {
    e.preventDefault();

    if (this.state.text == " " || this.state.priority == "0") {
      return alert('Edit your text and/or pick a priority')
    } else {
      let todo = {
        text: this.state.text,
        priority: this.state.priority,
        editEnabled: false,
      }
      let todos = [...this.state.todos];

      todos.splice(this.editIndexNum, 1, todo);
      this.setState({ todos });
      //resets state after user saves
      this.setState({
        text: "",
        priority: "0",
        id: 0,
        editEnabled: false
      })
    }
  }
  //editing "Todos"
  updateEditingTodoText(e) {
    this.setState({
      text: e.target.value
    });
  }

  updateEditingPriority(e) {
    this.setState({
      priority: e.target.value
    });
  }
  //creating "Todos"
  updateCreateTodoText(e) {
    this.setState({
      addingText: e.target.value
    });
  }
  updateTodoPriority(e) {
    this.setState({
      addingPriority: e.target.value
    });
  }
  //The method below is for the "delete button" on "ViewTodo"

  handleDeleteClick(id) {
    if (confirm("Are you sure you want to delete this Todo?")) {
      for (var i in this.state.todos) {
        if (this.state.todos[i].id == id) {
          var deleteTodo = this.state.todos[i];
          this.deleteIndexNum = i;
        }
      }
      let todos = [...this.state.todos];
      todos.splice(this.deleteIndexNum, 1);
      this.setState({ todos });
    }
  }
  //The method below is for changing "isCompleted" state upon change in "checkbox" status
  handleFormCheckboxInput(id) {
    for (var i in this.state.todos) {
      if (this.state.todos[i].id == id) {
        var toggleIsCompleted = this.state.todos[i];
        this.toggleIndexNumIsCompleted = i;
      }
    }
    let todo = {
      text: toggleIsCompleted.text,
      priority: toggleIsCompleted.priority,
      editEnabled: toggleIsCompleted.editEnabled,
      id: toggleIsCompleted.id,
      isCompleted: toggleIsCompleted.isCompleted ? false : true
    }
    let todos = [...this.state.todos];
    todos.splice(this.toggleIndexNumIsCompleted, 1, todo);
    this.setState({ todos });
  }

  render() {
    return (
      <div className='App'>

        <div className='page-header'>
          <h1 className='text-white'> Very Simple Todo App </h1>
          <p className='lead text-white'>Track all the Things</p>
        </div>
      </div>
    );
  }


  export default App;
