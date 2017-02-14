import React, { Component } from 'react';

// Bootstrap column
class Column extends Component {
    render() {
        const { size, columnCount, offset, children } = this.props;
        const offsetClass = offset ? `col-${size}-offset-${offset}` : '';
        return (
            <div className={`col-${size}-${columnCount} ${offsetClass}`}>
                {children}
            </div>
        );
    }
}

Column.propTypes = {
    size: React.PropTypes.string.isRequired,
    columnCount: React.PropTypes.string.isRequired,
    offset: React.PropTypes.string
};

export default Column;