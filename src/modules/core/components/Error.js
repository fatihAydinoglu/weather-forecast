import React from 'react';

// Error message
const Error = ({ message }) => (
    <div className="alert alert-danger" role="alert">
        {message}
    </div>
);

export default Error;