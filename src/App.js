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
      
   }
 }

  render() {
    return (
     <div className={!this.state.user.username ? 'notLoggedIn' : ''}>
      <Login user={this.state.user} fetchUser={this.fetchUser}>
      <Nav user={this.state.user} />
        <Router>
          <Articles path='/' user={this.state.user}/>
          <Articles path='/topics/:topic_slug' user={this.state.user}/>
          <Article path='/article/:id'/>
        </Router>
       </Login>
       {!this.state.user.username && <svg viewBox="0 0 1614 189.7" preserveAspectRatio="none" class="curve" role="presentation" aria-hidden="true"><path d="M0,12c0,0,181.5,270.5,653,144c835-224,961-14,961-14V0H0V12z"></path></svg>}
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
