import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import weatherIcon from '../../utils/weatherIcon';
import toCelsius from '../../utils/toCelsius';
import toMRS from '../../utils/toMRS';

const CityCard = (props) => {
    const { city, onCloseHandler } = props;
    return !city ? <p>Выберите город</p> : (
        <Container maxWidth="xs" disableGutters>
            <Card >
                <Box width="100px" mx="auto">
                    <CardMedia
                        component="img"
                        image={weatherIcon(city.weather[0].icon)}
                        title="Contemplative Reptile"
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {city.name}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {toCelsius(city.main.temp)}°C (ощущается как {toCelsius(city.main.feels_like)}°C)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {city.weather[0].description[0].toUpperCase() + city.weather[0].description.substring(1)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ветер {city.wind.speed} м/с
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Давление {toMRS(city.main.pressure)} мрс
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={onCloseHandler} size="small" color="primary">
                        Закрыть
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
};

export default CityCard;