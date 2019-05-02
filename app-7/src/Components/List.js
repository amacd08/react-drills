import React, { Component } from 'react'
import Todo from './Todo'

class List extends Component {
    constructor() {
        super()
        this.state = {

        }

    }


    render() {
        console.log(this.props)
        let list = this.props.task.map((elem,i) => {
        return <Todo key={i} task={elem} />
        })

        return(
            <div>
            <div>{list}</div>

            </div>
        )
    }
}

export default List