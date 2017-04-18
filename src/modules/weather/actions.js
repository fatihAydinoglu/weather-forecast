// @flow

import axios from 'axios';
import * as t from './actionTypes';
import {API_URL} from './constants';

// Fetching is initiated.
function fetchForecastRequest() {
  return {
    type: t.FETCH_FORECAST_REQUEST,
  };
}

// return success
function fetchForecastSuccess(payload) {
  return {
    type: t.FETCH_FORECAST_SUCCESS,
    payload,
  };
}

// return error
function fetchForecastFailure(error) {
  return {
    type: t.FETCH_FORECAST_FAILURE,
    error,
  };
}

// Get forecast from api
export function fetchForecast(city: string) {
  return (dispatch: ()=> mixed, getState: () => mixed) => {
    //for loading message
    dispatch(fetchForecastRequest());

    //api request url
    const apiRequestUrl = `${API_URL}&q=${city}`;

    return axios
      .get(apiRequestUrl)
      .then(response => {
        // Api returned success
        dispatch(fetchForecastSuccess(response.data));
      })
      .catch(err => {
        // Api returned error
        dispatch(fetchForecastFailure(err.message));
      });
  };
}

// Set selected date
export function setSelectedDate(date: string) {
  return {
    type: t.SET_SELECTED_DATE,
    date,
  };
}
