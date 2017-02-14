import axios from 'axios';
import * as t from './actionTypes';
import { API_URL } from './constants';

function fetchForecastRequest() {
    return {
        type: t.FETCH_FORECAST_REQUEST
    };
}

function fetchForecastSuccess(payload) {
    return {
        type: t.FETCH_FORECAST_SUCCESS,
        payload
    };
}

function fetchForecastFailure(error) {
    return {
        type: t.FETCH_FORECAST_FAILURE,
        error
    };
}

export function fetchForecast(city) {
    return dispatch => {
        //for loading message
        dispatch(fetchForecastRequest());

        //api request url
        const apiRequestUrl = `${API_URL}&q=${city}`;

        return axios.get(apiRequestUrl).then(response => {
            // Api returned success
            dispatch(fetchForecastSuccess(response.data));
        }).catch((err) => {
            // Api returned error
            dispatch(fetchForecastFailure(err.message));
        });
    };
}

export function setSelectedDate(date) {
    return dispatch => {
        dispatch({
            type: t.SET_SELECTED_DATE,
            date
        });
    };
}