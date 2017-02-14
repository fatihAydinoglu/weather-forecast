import React from 'react';

const Error = ({ message }) => (
    <div className="alert alert-danger" role="alert">
        {message}
    </div>
);

export default Error;