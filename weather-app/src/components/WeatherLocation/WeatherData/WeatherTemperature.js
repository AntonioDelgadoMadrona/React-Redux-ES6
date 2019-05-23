import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

//Importo de weathers el cual es una constante todos sus parametros
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';

//Paso esos nombres al nombre de los iconos
const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [SNOW]: "snow",
    [RAIN]: "rain",
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers'
    
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
        
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size="2x" />
    else
        return <WeatherIcons className="wicon" name={SUN} size="2x" />
}
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
    {
        getWeatherIcon(weatherState)
    } 
        <span className="temperature">{temperature}</span>
        <span className="temperatureType">{' Cº'}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;