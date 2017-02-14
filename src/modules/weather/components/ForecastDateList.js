import React, { Component } from 'react';

import { Row, Column } from '../../core';
import ForecastDateListItem from './ForecastDateListItem';

class ForecastDateList extends Component {
    constructor(props) {
        super(props);
        this.handleDateSelect = this.handleDateSelect.bind(this);
    }

    handleDateSelect(date) {
        this.props.onDateSelect(date);
    }

    render() {
        const { dates, selectedDate } = this.props;
        if(!dates) return null;
        return (
            <Row>
                <Column size="md" columnCount="8" offset="2">
                    <h4>Select a date:</h4>
                    <ul className="list-inline">
                        {dates.map(date =>
                            <ForecastDateListItem
                                key={date}
                                date={date}
                                selected={date === selectedDate}
                                onDateSelect={this.handleDateSelect}
                            />
                        )}
                    </ul>
                </Column>
            </Row>
        );
    }
}

ForecastDateList.propTypes = {
    dates: React.PropTypes.array,
    selectedDate: React.PropTypes.string,
    onDateSelect: React.PropTypes.func.isRequired
};

export default ForecastDateList;