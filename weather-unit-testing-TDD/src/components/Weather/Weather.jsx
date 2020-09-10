import React from 'react'
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
};

const renderState = state => {
    const Icon = state ? stateByName[state] : stateByName["sunny"];
    return <Icon />;
};

const Weather = props => {

    const { temperature, state } = props;

    return (
        <div>
            <IconContext.Provider value={{ size: '5em' }}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography display="inline" variant="h2">{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
}

export default Weather
