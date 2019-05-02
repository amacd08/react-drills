import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
  }
  this.handleText = this.handleText.bind(this)
}
  handleText(val) {
    this.setState({text: val})
    console.log(val)
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleText(e.target.value)} />
        <h1>{this.state.text}</h1>
        
      </div>
    );
  }

}

export default App;
