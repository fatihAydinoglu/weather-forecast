// @flow

import React from 'react';

// flow types
type Props = {
  message: string,
};

// Error message
const Error = ({message}: Props) => (
  <div className="alert alert-danger" role="alert">
    {message}
  </div>
);

export default Error;
