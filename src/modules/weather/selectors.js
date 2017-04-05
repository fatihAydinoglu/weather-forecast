import {createSelector} from 'reselect';
import {NAME} from './constants';

// Select forecast from state
const getForecast = state => state[NAME].forecast;
// Select date from state
const getSelectedDateFromState = state => state[NAME].selectedDate;

// Get date array from api result
const getForecastDates = createSelector(getForecast, forecastList => {
  if (!forecastList) return null;
  const dates = [];
  forecastList.forEach(item => {
    const date = new Date(item.date * 1000).toLocaleDateString();
    if (dates.indexOf(date) < 0) {
      dates.push(date);
    }
  });
  return dates;
});

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
  },
);

// get selected date forecast
const getSelectedDateForecast = createSelector(
  getForecast,
  getSelectedDate,
  (forecastList, selectedDate) => {
    if (!selectedDate) return null;
    const dailyForecast = [];
    forecastList.forEach(item => {
      const date = new Date(item.date * 1000).toLocaleDateString();
      if (date === selectedDate) {
        item.time = new Date(item.date * 1000).toLocaleTimeString();
        dailyForecast.push(item);
      }
    });
    return dailyForecast;
  },
);

// Get city name with country code
const getCity = state => {
  if (!state[NAME].city) return null;
  return state[NAME].city + ', ' + state[NAME].country;
};

export {getForecastDates, getSelectedDate, getSelectedDateForecast, getCity};
