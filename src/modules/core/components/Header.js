// @flow

import React from 'react';

// flow types
type Props = {
  text: string,
};

// Header
const Header = ({text}: Props) => (
  <h1 className="page-header text-center">
    {text}
  </h1>
);

export default Header;
