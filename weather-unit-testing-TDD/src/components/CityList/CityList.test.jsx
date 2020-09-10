import React from 'react';
import { render } from '@testing-library/react';
import CityList from './CityList';

const cities = [
    { city: 'Málaga', country: 'España' },
    { city: 'Sevilla', country: 'España' },
    { city: 'Barcelona', country: 'España' },
    { city: 'Valencia', country: 'España' },
];

test('should render', async () => {
    const { findAllByRole } = render(<CityList cities={cities} />);

    const items = await findAllByRole("listitem");

    expect(items).toHaveLength(4);
})
