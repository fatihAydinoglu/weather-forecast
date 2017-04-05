import React from 'react';
import {Row, Column} from '../../core';

// city result
const WeatherCityResult = ({city}) => (
  <Row>
    <Column size="md" columnCount="8" offset="2">
      <h3>{city}</h3>
    </Column>
  </Row>
);

export default WeatherCityResult;
