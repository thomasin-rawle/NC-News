import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    state = {
        username : ''
    }
    render() {
        if (this.props.user.username) return (this.props.children)
        return (
            <div className="login">
            <h1>{`<NC NEWS/>`}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.username} id='username' type='text' placeholder='Username'/>
                    <input id='password' type='text' placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>
        );
    }
    handleSubmit = e => {
        e.preventDefault();
        return this.props.fetchUser(this.state.username)
    }
    handleChange = e => {
        const {value} = e.target;
        this.setState({
            username: value
        })
    }
}

export default Login;