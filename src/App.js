import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Article from './components/Article';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound'
import * as api from './api'

class App extends Component {

 state= {
   user:{},
   topics: []
 }

  render() {
    
    const currentUser = this.state.user
    return (
    <div className={!currentUser.username ? 'notLoggedIn' : ''}>
      <Login user={currentUser} fetchUser={this.fetchUser}>
      <Nav topics={this.state.topics} user={currentUser} />
        <Router>
          <Articles topics={this.state.topics} path='/' user={currentUser}/>
          <Articles path='/topics/:topic_slug' user={currentUser}/>
          <Article path='/article/:id' user={currentUser}/>
          <UserProfile path='users/:username' currentUser={currentUser} logOut={this.signOut}/>
          <NotFound default />
          <NotFound path='/error'/>
        </Router>
       </Login>
       {!currentUser.username && <svg viewBox="0 0 1614 189.7" preserveAspectRatio="none" className="curve" role="presentation" aria-hidden="true"><path d="M0,12c0,0,181.5,270.5,653,144c835-224,961-14,961-14V0H0V12z"></path></svg>}
     </div>
    );
  }
  componentDidMount() {
    console.log('mounted')
   
    this.fetchTopics();
    const user = sessionStorage.getItem('user')
    if (sessionStorage.user) {
      this.setState({
          user: JSON.parse(user)
        })
    }
   
  }
  componentDidUpdate (prevProps, prevState) {
    if(prevState.user !== this.state.user){
      sessionStorage.setItem('user' , JSON.stringify(this.state.user))
    }
  }
  fetchTopics = () => {
    api.getTopics().then(newTopics => {
      this.setState({
        topics: newTopics
      });
    });
  };
  fetchUser = (username) => {
      api.getUser(username)
      .then(userInfo => {
        this.setState({
            user: userInfo
        })
       
    })
  }
  signOut = () => {
    sessionStorage.clear()
    this.setState({
      user: {}
    })
    navigate('/');
  }
}

export default App;
