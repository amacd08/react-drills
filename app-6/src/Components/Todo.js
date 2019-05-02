import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        let copyOfTodo = this.props.todo.map((e,i) => <li key={i}>{e}</li>)
        return(
            <ul>
                {copyOfTodo}
            </ul>
        )
    }
}

export default Todo