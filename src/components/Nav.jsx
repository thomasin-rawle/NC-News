import React from 'react';
import {Link} from '@reach/router';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <Link to='/'>Home</Link>
            <div className="dropdown">
                    <button className="dropbtn">
                        Topics <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to='/topics/coding'>Coding</Link>
                        <Link to='/topics/cooking'>Cooking</Link>
                        <Link to='/topics/football'>Football</Link>
                    </div> 
                </div>
        </div>
    );
};

export default Nav;