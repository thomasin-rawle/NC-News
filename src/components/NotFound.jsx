import React from 'react';
import './NotFound.css'

const NotFound = (props) => {
    return (
        <div className="error-container">
            <div className="error">
                {(props.path && 
                <div>
                <h1>Oops! </h1>
                <h3>It seems you took a wrong turn.</h3>
                <h1 className="code">{props.location.state.errCode}</h1>
                <p className="message">{props.location.state.errMsg}</p>
                </div>) 
                || <h1>Page Not Found!</h1>}
                <button onClick={() => {window.history.back()}}><i class="fa fa-chevron-left" aria-hidden="true"></i>Head Back</button>
            </div>
        </div>
    );
};

export default NotFound;