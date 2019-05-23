import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCitites, getCity } from '../reducers';
import ForecastExtended from './../components/ForecastExtended';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';

class ForecastExtendedContainer extends Component {
    render(){

        const { city, forecastData } = this.props
        
        return(
            city &&
            <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
        )
    }
};

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCitites(state) })

export default connect(mapStateToProps, null)(ForecastExtendedContainer);