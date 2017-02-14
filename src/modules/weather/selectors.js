import { createSelector } from 'reselect';
import { NAME } from './constants';

const getForecast = (state) => state[NAME].forecast;
const getSelectedDateFromState = (state) => state[NAME].selectedDate;

// Get date array from api result
const getForecastDates = createSelector(
    getForecast,
    (forecastList) => {
        if (!forecastList) return null;
        const dates = [];
        forecastList.forEach(item => {
            if (dates.indexOf(item.date) < 0) {
                dates.push(item.date);
            }
        });
        return dates;
    }
);

// get selected date
// If user hasn't selected return first date from api result
const getSelectedDate = createSelector(
    getSelectedDateFromState,
    getForecastDates,
    (selectedDateFromState, forecastDates) => {
        if (selectedDateFromState) {
            return selectedDateFromState;
        } else if (forecastDates && forecastDates.length > 0) {
            return forecastDates[0];
        }
        return null;
    }
);

// get selected date forecast
const getSelectedDateForecast = createSelector(
    getForecast,
    getSelectedDate,
    (forecastList, selectedDate) => {
        if (!selectedDate) return null;
        const dailyForecast = [];
        forecastList.forEach(item => {
            if (item.date === selectedDate) {
                dailyForecast.push(item);
            }
        });
        return dailyForecast;
    }
);

const getCity = (state) => {
    if(!state[NAME].city) return null;
    return state[NAME].city + ', ' + state[NAME].country;
};

export {
    getForecastDates,
    getSelectedDate,
    getSelectedDateForecast,
    getCity
};
