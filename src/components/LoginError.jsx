import React from 'react';
import './LoginError.css'

const LoginError = ({location}) => {
    return (
        <div className="error-username">
            <div>
            
            <p><i className="fa fa-exclamation-circle" aria-hidden="true"></i>{location.state.errMsg}</p>
            </div>
           
        </div>
    );
};

export default LoginError;