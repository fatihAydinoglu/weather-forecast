import { combineReducers } from 'redux';
import { weatherReducer, weatherConstants } from './modules/weather';

const rootReducer = combineReducers({
    [weatherConstants.NAME]: weatherReducer
});

export default rootReducer;
