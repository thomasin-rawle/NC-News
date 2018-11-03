import React from 'react';
import './NotFound.css'

const NotFound = (props) => {
    return (
        <div className="error">
            {(props.path && 
            <div>
            <h2>Status: {props.location.state.errCode}</h2>
            <h2>Message: {props.location.state.errMsg}</h2>
            </div>) 
            || <h1>Page Not Found!</h1>}
           
        </div>
    );
};

export default NotFound;