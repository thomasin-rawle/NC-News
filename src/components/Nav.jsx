import React from 'react';
import { Link } from '@reach/router';
import './Nav.css';

import ProfilePic from './ProfilePic';

const Nav = (props) => {
  return (
    <div className="nav">
    <Link to="/"><div className="logo">{`<NC News/>`}</div></Link>
      <ul>
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">
            Topics <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            {props.topics.map(topic => {
              return (
                <Link key={topic._id} to={`/topics/${topic.slug}`}>
                  {topic.title}
                </Link>
              );
            })}
          </div>
        </div>
        </ul>
        <Link to={`/users/${props.user._id}`}>
        <div className="logged-in">
          <ProfilePic user={props.user}/>
          {props.user.username}
        </div>
        </Link>
    </div>
  );
};

export default Nav;