import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      listOfThings: ["car", "cat", "carrot", "cayote"]
    }

  }


  displayList(){
    let copyList = listofThings.slice()
    for (i=0; i < listOfThings.length; i++){
       copyList.push(<li>{listOfThings[i]}</li>)
    }
    return copyList

  }
  render() {
    copyListOfThings = this.listOfThings.slice()
    
    return (
      <div className="App">
        <ui>
          {displayList()}
        </ui>

      </div>
    );
  }
}

export default App;
