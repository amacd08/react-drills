import React, { Component } from "react";
import "./App.css";
import Image from './Components/Image'

class App extends Component {
  constructor() {
    super()
    this.state = {
      image: "https://picsum.photos/id/666/300/400"


    }
  }
  render() {
    return (
      <div className="App">
          <Image 
            img={this.state.image}/>
      </div>
    );
  }
}

export default App;
