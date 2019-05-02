import React, { Component } from 'react'

class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            input:''
        }
    }

    handleInputChange(val) {
        this.setState({input:val})
    }

    handleAdd = () => {
        this.props.add(this.state.input)
        this.setState({input:''})
    }

    render() {
        return(
            <div>
            <input type='text' onChange={e => this.handleInputChange(e.target.value)} value={this.state.input} />
            <button onClick={this.handleAdd}>Add To Do</button>
            </div>
        )

    }
}

export default NewTask