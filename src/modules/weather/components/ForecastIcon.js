import React from 'react';

const ForecastIcon = ({ icon }) => (
    <img src={`http://openweathermap.org/img/w/${icon}.png`} />
);

export default ForecastIcon;