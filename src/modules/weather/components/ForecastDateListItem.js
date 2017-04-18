// @flow

import React, {Component} from 'react';

// flow types
type DefaultProps = any;
type Props = {
  date: string,
  selected: boolean,
  onDateSelect: () => mixed,
};
type State = any;

// Forecast returned date links
class ForecastDateListItem extends Component<DefaultProps, Props, State> {
  // flow types
  handleClick: () => mixed;

  constructor(props: Object) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: Event) {
    e.preventDefault();
    this.props.onDateSelect(this.props.date);
  }

  render() {
    const {date, selected} = this.props;
    return (
      <li>
        <a
          href="#"
          className={'btn btn-default' + (selected ? ' active' : '')}
          onClick={this.handleClick}
        >
          {date}
        </a>
      </li>
    );
  }
}

export default ForecastDateListItem;
