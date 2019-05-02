import React, { Component } from 'react'

class ArrayOfData extends Component {
    constructor() {
        super()
        this.state = {
            array1: [],
            input: '',
            input2: '',
            filteredArray: []
        }
        this.inputHandler = this.inputHandler.bind(this)
    }

    inputHandler(e) {
        this.setState({input: e.target.value})
    }

    inputHandler2(e) {
        this.setState({input2: e.target.value})
        


    }

    updateArray() {
        let arrayCopy = this.state.array1
        arrayCopy.push(this.state.input)
        console.log(this.state.input)
        this.setState({array1: arrayCopy,
                       input: ''})
    }

    
    render() {
        let arrayOfThings = this.state.array1.filter((elem, index) => elem.includes(this.state.input2))
        arrayOfThings = arrayOfThings.map((elem, index) => <li key={index}><h2>{elem}</h2></li> )
        
        return(
            <div>
                <input type='text' onChange={this.inputHandler} value={this.state.input}/>
                <button onClick={() => this.updateArray() } >Add to List</button> 
                <input type='text' onChange={(e) => this.inputHandler2(e)}/>
                <ui>
                  {arrayOfThings}
                </ui>
            </div>
        )
    }
}


export default ArrayOfData