import React, { Component } from 'react';
import { Link } from '@reach/router';
import './Nav.css';

import ProfilePic from './ProfilePic';

class Nav extends Component {
  state = {
    isMobileNavActive: false
  };
  render() {
      const {topics, user} = this.props
    return (
      <div>
        <nav className="nav desktop-nav">
          <Link to="/">
            <div className="logo">{`<NC News/>`}</div>
          </Link>
          <ul>
            <Link to="/">Home</Link>
            <div className="dropdown">
              <button className="dropbtn">
                Topics <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                {topics.map(topic => {
                  return (
                    <Link key={topic._id} to={`/topics/${topic.slug}`}>
                      {topic.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link to={`/users/${user.username}`}>
              <div className="logged-in">
                <ProfilePic user={user} />
                {user.username}
              </div>
            </Link>
          </ul>
        </nav>

        <nav className="nav mobile-nav">
          <Link to="/">
            <div className="logo">{`<NC News/>`}</div>
          </Link>
          <div
            className={
              this.state.isMobileNavActive
                ? 'button_container active'
                : 'button_container'
            }
            id="toggle"
            onClick={() => {
              this.toggleClass();
            }}
          >
            <span className="top" />
            <span className="middle" />
            <span className="bottom" />
          </div>
          <div
            className={
              this.state.isMobileNavActive ? 'overlay open' : 'overlay'
            }
            id="overlay"
          >
            <div className="overlay-menu">
              <ul>
                <li>
                  <Link onClick={this.toggleClass} to={`/users/${user.username}`}>
                    <div>{`Profile: ${user.username}`}</div>
                  </Link>
                </li>
                <li>
                  <Link onClick={this.toggleClass} to="/">Home</Link>
                </li>
                {topics.map(topic => {
                  return (
                    <li key={topic._id}>
                      <Link onClick={this.toggleClass} to={`/topics/${topic.slug}`}>{topic.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  toggleClass() {
    const {isMobileNavActive} = this.state;
    this.setState({
      isMobileNavActive: !isMobileNavActive
    });
  }
}

export default Nav;
