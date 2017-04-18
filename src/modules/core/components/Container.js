// @flow

import React from 'react';

// flow types
type Props = {
  children?: any,
};

// Bootstrap container
const Container = ({children}: Props) => (
  <div className="container">
    {children}
  </div>
);

export default Container;
