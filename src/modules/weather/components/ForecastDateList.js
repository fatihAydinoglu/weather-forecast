// @flow

import React, {Component} from 'react';

import {Row, Column} from '../../core';
import ForecastDateListItem from './ForecastDateListItem';

// flow types
type DefaultProps = any;
type Props = {
  dates: Array<string>,
  selectedDate: string,
  onDateSelect: () => mixed,
};
type State = any;

// Forecast returned dates
class ForecastDateList extends Component<DefaultProps, Props, State> {
  // flow types
  handleDateSelect: () => mixed;

  constructor(props: Props) {
    super(props);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  handleDateSelect(date: string) {
    this.props.onDateSelect(date);
  }

  render() {
    const {dates, selectedDate} = this.props;
    if (!dates) return null;
    return (
      <Row>
        <Column size="md" columnCount="8" offset="2">
          <h4>Select a date:</h4>
          <ul className="list-inline">
            {dates.map(date => (
              <ForecastDateListItem
                key={date}
                date={date}
                selected={date === selectedDate}
                onDateSelect={this.handleDateSelect}
              />
            ))}
          </ul>
        </Column>
      </Row>
    );
  }
}

export default ForecastDateList;
