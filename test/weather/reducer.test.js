import chai from 'chai';
import * as t from '../../src/modules/weather/actionTypes';
import { weatherReducer } from '../../src/modules/weather/';
import mockResponse from './mockResponse';
import mockResponseReduced from './mockResponseReduced';

const expect = chai.expect;

describe('Weather Reducer', () => {
    const initialState = {
        city: null,
        country: null,
        forecast: null,
        selectedDate: null,
        pending: false,
        error: null
    };

    it('should handle an action with unknown type', () => {
        expect(weatherReducer(initialState, {})).to.deep.equal(initialState);
    });

    //FETCH_FORECAST_SUCCESS
    it('should handle action of type FETCH_FORECAST_SUCCESS', () => {
        const action = { type: t.FETCH_FORECAST_SUCCESS, payload: mockResponse };
        expect(weatherReducer(initialState, action)).to.deep.equal(mockResponseReduced);
    });

});