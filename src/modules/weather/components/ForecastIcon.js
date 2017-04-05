import React from 'react';

// Get icon from openweather
const ForecastIcon = ({icon}) => (
  <img src={`http://openweathermap.org/img/w/${icon}.png`} />
);

export default ForecastIcon;
