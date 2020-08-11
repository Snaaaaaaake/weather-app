import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import toCelsius from '../../utils/toCelsius';
import weatherIcon from '../../utils/weatherIcon';

const CityListItem = (props) => {
    const { city } = props;
    return (
        <ListItem title="Подробнее" key={`city${city.name}`} button onClick={props.clickHandler}>
            <ListItemIcon>
                <img src={weatherIcon(city.weather[0].icon)} alt={city.name} />
            </ListItemIcon>
            <ListItemText primary={`${city.name}`} secondary={`${toCelsius(city.main.temp)}°C`} />
        </ListItem>
    );
};

export default CityListItem;