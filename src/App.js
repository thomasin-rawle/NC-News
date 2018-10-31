import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Article from './components/Article';
import Login from './components/Login';
import * as api from './api'

class App extends Component {

 state= {
   user: {
      username: 'tickle122'
   }
 }

  render() {
    return (
     <div>
      <Login user={this.state.user} fetchUser={this.fetchUser}>
      <Nav user={this.state.user} />
        <Router>
          <Articles path='/' user={this.state.user}/>
          <Articles path='/topics/:topic_slug' user={this.state.user}/>
          <Article path='/article/:id'/>
        </Router>
       </Login>
     </div>
    );
  }
  fetchUser = (username) => {
      api.getUser(username)
      .then(userInfo => {
        this.setState({
            user: userInfo
        })
    })
  }
}

export default App;
