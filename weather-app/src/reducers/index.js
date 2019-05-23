import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities, getForecastDataFromCitites as _getForecastDataFromCitites, getWeatherCities as _getWeatherCities } from './cities';
import { city } from './city';

export default combineReducers({
    cities,
    city
});

export const getCity = createSelector(state => state.city, city => city);

export const getForecastDataFromCitites = createSelector(state => state.cities, getCity, _getForecastDataFromCitites);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);