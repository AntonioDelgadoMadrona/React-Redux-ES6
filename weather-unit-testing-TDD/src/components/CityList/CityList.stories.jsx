import React from 'react';
import CItyList from './CityList';
import CityList from './CityList';

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: 'Málaga', country : 'España' },
    { city: 'Sevilla', country : 'España' },
    { city: 'Barcelona', country : 'España' },
    { city: 'Valencia', country : 'España' },
];

export const CityListExample = () => <CityList cities={cities} />;