// @flow

import * as t from './actionTypes';

// Initial state
const initialState = {
  city: null,
  country: null,
  forecast: null,
  selectedDate: null,
  pending: false,
  error: null,
};

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    // If fetching weather data is success
    case t.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        city: action.payload.city.name,
        country: action.payload.city.country,
        forecast: action.payload.list.map(item => ({
          date: item.dt,
          temp: Math.floor(Number(item.main.temp) - 273.15), // Temperature, convert to celcius
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          icon: item.weather[0].icon,
          description: item.weather[0].main +
            ' - ' +
            item.weather[0].description,
        })),
        pending: false,
        error: '',
      };
    // Pending
    case t.FETCH_FORECAST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    // Failure
    case t.FETCH_FORECAST_FAILURE:
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    // set selected date
    case t.SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.date,
      };
  }

  // Default
  return state;
};
