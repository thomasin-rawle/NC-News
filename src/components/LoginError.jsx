import React from 'react';


const LoginError = (props) => {
    return (
        <div className="error">
            <div>
            <h2>Status: {props.location.state.errCode}</h2>
            <h2>Message: {props.location.state.errMsg}</h2>
            </div>
        </div>
    );
};

export default LoginError;