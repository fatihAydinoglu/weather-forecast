// @flow

import React, {Component} from 'react';

// flow types
type DefaultProps = any;
type Props = {
  size: string,
  columnCount: number,
  offset: number,
  children?: any,
};
type State = any;

// Bootstrap column
class Column extends Component<DefaultProps, Props, State> {
  render() {
    const {size, columnCount, offset, children} = this.props;
    const offsetClass = offset ? `col-${size}-offset-${offset.toString()}` : '';
    return (
      <div className={`col-${size}-${columnCount.toString()} ${offsetClass}`}>
        {children}
      </div>
    );
  }
}

export default Column;
