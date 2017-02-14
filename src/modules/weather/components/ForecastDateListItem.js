import React, { Component } from 'react';

class ForecastDateListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onDateSelect(this.props.date);
    }

    render() {
        const { date, selected } = this.props;
        return (
            <li>
                <a href="#"
                    className={'btn btn-default' + (selected ? ' active' : '')}
                    onClick={this.handleClick}>{date}</a>
            </li>
        );
    }
}

ForecastDateListItem.propTypes = {
    date: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool.isRequired,
    onDateSelect: React.PropTypes.func.isRequired
};

export default ForecastDateListItem;