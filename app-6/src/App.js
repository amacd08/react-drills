import React, { Component } from "react";
import "./App.css";
import Todo from './Components/Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [],
      newTask: '',
    }
  }

  handleText = (e) => {
      this.setState({newTask:e.target.value})
  }

  addToList = () => {
    let copyTodoList = this.state.todoList.slice()
    copyTodoList.push(this.state.newTask)
    this.setState({
      todoList: copyTodoList,
      newTask:''
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleText} value={this.state.newTask}/>
        <button onClick={this.addToList}>Add</button>
        <Todo todo={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
