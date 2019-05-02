import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            input1: '',
            input2: '',
            username: '',
            password: '',

        }
    }

    handleInput(e) {
        this.setState({input1:e.target.value})

    }

    handleInput2(e) {
        this.setState({input2:e.target.value})
    }
    
    alert(user, pass, cb) {
        this.setState({
            username: this.state.input1,
            password: this.state.input2,
        })
        
    }
    

    render() {

        return(
            <div>
                <h4> Login </h4>
                <input type='text' onChange={(e) => this.handleInput(e)} />
                <input type='text' onChange={(e) => this.handleInput2(e)} />
                <button onClick={() => { 
                    this.setState({
                    username: this.state.input1,
                    password: this.state.input2,
                })
                alert(`Username: ${this.state.username}, Password: ${this.state.password}`)
                
            
            }
            }>Login</button>
            </div>



        )
    }
}

export default Login