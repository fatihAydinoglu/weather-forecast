// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchForecast, setSelectedDate} from '../actions';
import {
  getForecastDates,
  getSelectedDate,
  getSelectedDateForecast,
  getCity,
} from '../selectors';
import {Loading, Error} from '../../core';

import WeatherInput from './WeatherInput';
import ForecastDateList from './ForecastDateList';
import ForecastList from './ForecastList';
import WeatherCityResult from './WeatherCityResult';
import type {ForecastType} from '../types';

// flow types
type DefaultProps = any;
type Props = {
  forecastDates: Array<string>,
  selectedDate: string,
  dailyForecast: Array<ForecastType>,
  city: string,
  pending: string,
  error: string,
  fetchForecast: () => mixed,
  setSelectedDate: () => mixed
};
type State = any;

// Container of weather forecastDates
// Connects to redux store
class Weather extends Component<DefaultProps, Props, State> {
  // flow types
  handleDateSelect: () => mixed;
  handleWeatherInputSubmit: () => mixed;

  constructor(props) {
    super(props);

    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.handleWeatherInputSubmit = this.handleWeatherInputSubmit.bind(this);
  }
  handleWeatherInputSubmit(city: string) {
    this.props.fetchForecast(city);
  }

  handleDateSelect(date: string) {
    this.props.setSelectedDate(date);
  }

  render() {
    const {
      forecastDates,
      selectedDate,
      dailyForecast,
      city,
      pending,
      error,
    } = this.props;

    // If api call is in progress
    if (pending) return <Loading />;
    // If there is an error
    if (error) return <Error message="error" />;
    return (
      <div>
        <WeatherInput onSubmit={this.handleWeatherInputSubmit} />
        {city && <WeatherCityResult city={city} />}
        {forecastDates &&
          <ForecastDateList
            dates={forecastDates}
            selectedDate={selectedDate}
            onDateSelect={this.handleDateSelect}
          />}
        {dailyForecast && <ForecastList dailyForecastList={dailyForecast} />}
      </div>
    );
  }
}

// get data from state and bind to props
function mapStateToProps(state) {
  return {
    forecastDates: getForecastDates(state),
    selectedDate: getSelectedDate(state),
    dailyForecast: getSelectedDateForecast(state),
    city: getCity(state),
    pending: state.weather.pending,
    error: state.weather.error,
  };
}

// connect to redux
export default connect(mapStateToProps, {
  fetchForecast,
  setSelectedDate,
})(Weather);
