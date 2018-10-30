import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Topics from './components/Topics';

class App extends Component {
  render() {
    return (
     <div>
      <Nav />
        <Router>
          <Home path='/' />
          <Topics path='/topics/:topic_slug'/>
        </Router>
     </div>
    );
  }
}

export default App;
