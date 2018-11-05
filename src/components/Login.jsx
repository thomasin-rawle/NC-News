import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    state = {
        username : 'jessjelly'
    }
    render() {
        const {user, children} = this.props
        const {username} = this.state
        if (user.username) return (children) 
        return (
            <div className="notLoggedIn">
                <div className="login">
                <h1>{`<NC NEWS/>`}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} value={username} id='username' type='text' placeholder='Username'/>
                        <input readOnly id='password' type='text' value={'********'} placeholder='Password'/>
                        <button>Login</button>
                    </form>
                </div>
                <svg viewBox="0 0 1614 189.7" preserveAspectRatio="none" className="curve" role="presentation" aria-hidden="true"><path d="M0,12c0,0,181.5,270.5,653,144c835-224,961-14,961-14V0H0V12z"></path></svg>
            </div>
        );
    }
    handleSubmit = e => {
        const {fetchUser} = this.props;
        const {username} = this.state
        e.preventDefault();
        return fetchUser(username)
    }
    handleChange = e => {
        const {value} = e.target;
        this.setState({
            username: value
        })
    }
}

export default Login;