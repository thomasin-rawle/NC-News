import React, { Component } from 'react';
import { Link } from '@reach/router';
import './Nav.css';
import * as api from '../api';

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">
            Topics <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            {this.state.topics.map(topic => {
              return (
                <Link key={topic._id} to={`/topics/${topic.slug}`}>
                  {topic.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.topics !== this.state.topics) {
      this.fetchTopics();
    }
  }
  fetchTopics = () => {
    api.getTopics().then(newTopics => {
      this.setState({
        topics: newTopics
      });
    });
  };
}

export default Nav;
