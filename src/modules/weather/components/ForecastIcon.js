// @flow

import React from 'react';

type Props = {
  icon: string,
};

// Get icon from openweather
const ForecastIcon = ({icon}: Props) => (
  <img src={`http://openweathermap.org/img/w/${icon}.png`} />
);

export default ForecastIcon;
