import React from 'react';

const Back = () => {
    return (
        <div>
            <button className="back" onClick={() => {window.history.back()}}><i className="fa fa-chevron-left" aria-hidden="true"></i> Back</button>
        </div>
    );
};

export default Back;