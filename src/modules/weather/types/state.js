// @flow

import {NAME} from '../constants';
import type {ForecastType} from './forecast';

export type StateType = {
  +weather: {
    +city: string,
    +country: string,
    +forecast: Array<ForecastType>,
    +selectedDate: string,
    +pending: string,
    +error: string,
  },
};
