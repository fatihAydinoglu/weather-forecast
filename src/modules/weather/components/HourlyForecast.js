// @flow

import React, {Component} from 'react';
import ForecastIcon from './ForecastIcon';
import type {ForecastType} from '../types';

// flow types
type DefaultProps = any;
type Props = {
  forecast: ForecastType,
};
type State = any;

// Forecast table row
class HourlyForecast extends Component<DefaultProps, Props, State> {
  render() {
    const {
      time,
      description,
      temp,
      humidity,
      pressure,
      icon,
    } = this.props.forecast;
    return (
      <tr>
        <th scope="row">{time}</th>
        <td>
          <ForecastIcon icon={icon} />
          {description}
        </td>
        <td>{temp}°C</td>
        <td>{humidity}%</td>
        <td>{pressure} hpa</td>
      </tr>
    );
  }
}

export default HourlyForecast;
