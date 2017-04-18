// @flow

import React from 'react';

// flow types
type Props = {
  children?: any,
};

// Bootstrap row
const Row = ({children}: Props) => (
  <div className="row">
    {children}
  </div>
);

export default Row;
