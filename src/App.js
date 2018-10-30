import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Topics from './components/Topics';
import Article from './components/Article';

class App extends Component {

  render() {
    return (
     <div>
      <Nav />
        <Router>
          <Home path='/' />
          <Topics path='/topics/:topic_slug'/>
          <Article path='/article/:id'/>
        </Router>
     </div>
    );
  }
}

export default App;
