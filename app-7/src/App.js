import React, { Component } from "react";
import "./App.css";
import List from './Components/List'
import NewTask from './Components/NewTask'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
  }

  add = (task) => {
    this.setState({list: [...this.state.list, task] })
  }
  
  render() {
    return (
      <div className="App">
        <h1>My To-Do list</h1>
        <NewTask add={this.add}/>
        <List task={this.state.list}/>
      </div>
    );
  }
}

export default App;
