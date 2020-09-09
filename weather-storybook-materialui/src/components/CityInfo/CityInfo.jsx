import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const CityInfo = ({ city, country }) => {
    return (
        <div>
            <Typography variant="h4" display="inline">{city}, </Typography>
            <Typography variant="h5" display="inline">{country}</Typography>
        </div>
    )
};

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};

export default CityInfo;