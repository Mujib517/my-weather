import React from 'react';

export default (props) => {
    return props.err ?
        <div className="alert alert-danger">Failed to load data. Please verify your input</div>
        : null;
}