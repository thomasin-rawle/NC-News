import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Article from './components/Article';

class App extends Component {

  render() {
    return (
     <div>
      <Nav />
        <Router>
          <Articles path='/' />
          <Articles path='/topics/:topic_slug'/>
          <Article path='/article/:id'/>
        </Router>
     </div>
    );
  }
}

export default App;
