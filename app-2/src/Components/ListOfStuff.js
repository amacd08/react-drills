import React, { Component } from 'react'


class ListOfStuff extends Component {
    constructor() {
    super()
    this.state = {
        input: '',
        list: ["car", "cat", "carrot", "cayote"]


    }
  
  }
  handleUpdate(val) {
      this.setState({input: val})
  }
  updateList(val) {
      let listOfStuffs =[]
      listOfStuffs = this.state.list.slice()
      listOfStuffs.push(val)
      this.setState({list:listOfStuffs,
                     input: ''})
      
  }
  
  render() {
    const listOfStuff = this.state.list.map((hobby, index) => <li key={index}>{hobby}</li>)

      return(
          <div>
            <input type='text' onChange={(e) => this.handleUpdate(e.target.value)} value={this.state.input} />
            <button onClick={() => this.updateList(this.state.input)}>Update List</button>
            <ui>
                {listOfStuff}
            </ui>
          </div>
      )

  }
}

export default ListOfStuff