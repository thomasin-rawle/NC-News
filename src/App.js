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
import LoginError from './components/LoginError';

class App extends Component {

 state= {
   user:{},
   topics: []
 }

  render() {
    
    const currentUser = this.state.user
    return (
    <div>
     <Router>
      <Login path='/' user={currentUser} fetchUser={this.fetchUser}>
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
       <LoginError path='/login/error'/>
       </Router>
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
    })
   
  };
  
  fetchUser = (username) => {
      api.getUser(username)
      .then(userInfo => {
        this.setState({
            user: userInfo
        })
    })
    .catch(err => {
      navigate('/login/error', {
         state: {
          errCode: err.response.status,
          errMsg: err.response.data.msg
        }
      });
    });
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
