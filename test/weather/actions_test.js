import 'isomorphic-fetch'; // Fetch polyfill for node and browsers alike
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import chai from 'chai';

import {
  setSelectedDate,
  fetchForecast,
} from '../../src/modules/weather/actions';
import * as t from '../../src/modules/weather/actionTypes';
import {API_URL} from '../../src/modules/weather/constants';
import mockResponse from './mockResponse';

const expect = chai.expect;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('Weather Action Creators', () => {
  describe('setSelectedDate', () => {
    it('should create action for updating date', () => {
      const date = '01/01/2016';
      const createdAction = setSelectedDate(date);
      const expectedAction = {
        type: t.SET_SELECTED_DATE,
        date,
      };
      expect(createdAction).to.deep.equal(expectedAction);
    });
  });

  describe('fetchForecast', () => {
    it('should create action for getting forecast data', () => {
      // Mock response
      const city = 'London';
      mock.onGet(`${API_URL}&q=${city}`).reply(200, mockResponse);

      const store = mockStore();

      return store.dispatch(fetchForecast(city)).then(() => {
        //Expected action
        const expected = [
          {type: t.FETCH_FORECAST_REQUEST},
          {type: t.FETCH_FORECAST_SUCCESS, payload: mockResponse},
        ];

        //Test it
        expect(store.getActions()).to.deep.equal(expected);
      });
    });
  });
});
