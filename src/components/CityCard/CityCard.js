import React, { useEffect, useContext } from 'react';
import { connect as connectWithStore } from 'react-redux';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ServiceContext from '../ServiceContext/ServiceContext';
import ErrorElement from '../ErrorElement/ErrorElement';
import {
    fetchWeeklyWeatherListRequest,
    fetchWeeklyWeatherListSuccess,
    fetchWeeklyWeatherListFailure,
} from '../../actions/actions';
import Spinner from '../Spinner/Spinner';
import weatherIcon from '../../utils/weatherIcon';
import toCelsius from '../../utils/toCelsius';
import toMRS from '../../utils/toMRS';
import dateFormatter from '../../utils/dateFormatter';

const CityCard = (props) => {
    const weatherService = useContext(ServiceContext);
    const {
        onCloseHandler,
        cityWeeklyWeatherState,
        cityCurrentWeather,
        fetchWeeklyWeatherListRequest,
        fetchWeeklyWeatherListSuccess,
        fetchWeeklyWeatherListFailure,
    } = props;
    const { cityWeeklyWeather } = cityWeeklyWeatherState;
    const { lat, lon } = cityCurrentWeather.coord;
    const rawDate = new Date(cityCurrentWeather.dt * 1000);
    const date = dateFormatter(rawDate);
    const hours = rawDate.getHours();

    useEffect(() => {
        fetchWeeklyWeatherListRequest();
        weatherService.getWeeklyWeather(lat, lon)
            .then(data => fetchWeeklyWeatherListSuccess(data.daily))
            .catch(err => fetchWeeklyWeatherListFailure(err))
    }, [
        weatherService,
        lat,
        lon,
        fetchWeeklyWeatherListRequest,
        fetchWeeklyWeatherListSuccess,
        fetchWeeklyWeatherListFailure,
    ]);

    return !cityCurrentWeather ? <p>Выберите город</p> : (
        <Container maxWidth="xs" disableGutters>
            <Card >
                <Box width="100px" mx="auto">
                    <CardMedia
                        component="img"
                        image={weatherIcon(cityCurrentWeather.weather[0].icon)}
                    />
                </Box>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Сегодня, {date}:
                    </Typography>
                    <Typography gutterBottom variant="h4" component="h2">
                        {cityCurrentWeather.name}
                    </Typography>
                    
                    <Typography variant="body1" component="p">
                         {toCelsius(cityCurrentWeather.main.temp)}°C 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ощущается как {toCelsius(cityCurrentWeather.main.feels_like)}°C
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {cityCurrentWeather.weather[0].description[0].toUpperCase() + cityCurrentWeather.weather[0].description.substring(1)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ветер {cityCurrentWeather.wind.speed} м/с
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Давление {toMRS(cityCurrentWeather.main.pressure)} мрс
                    </Typography>
                    {
                        (cityWeeklyWeather && hours > 6) &&
                        <Typography variant="body2" color="textSecondary" component="p">
                            Температура ночью: {toCelsius(cityWeeklyWeather[0].temp.night)}°C
                        </Typography>
                    }
                    <WeeklyWeatherBlock cityWeeklyWeatherState={cityWeeklyWeatherState} />
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

const WeeklyWeatherBlock = (props) => {
    const { cityWeeklyWeather, isLoading, error } = props.cityWeeklyWeatherState;
    let Content;
    if (isLoading) {
        Content = () => <Spinner/>;
    } else if (error) {
        Content = () => <ErrorElement error={error}/>;
    } else {
        Content = () => cityWeeklyWeather.map((day, index) => 
            {
                const rawDate = new Date(day.dt * 1000);
                const date = dateFormatter(rawDate);
                return index !== 0 && (
                    <Box key={`day_${index}`} mr="10px" mt="13px">
                        <Typography variant="body2" color="textSecondary" component="p">
                            {date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`Днём: ${toCelsius(day.temp.day)}°C`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`Ночью: ${toCelsius(day.temp.night)}°C`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {day.weather[0].description[0].toUpperCase() + day.weather[0].description.substring(1)}
                        </Typography>
                    </Box>
                );
            }
        );
    }

    return (
        <Box mt="15px">
            <Typography variant="body1" component="p">
                В ближайшие дни:
            </Typography>
            <Box
                display="grid"
                gridTemplateColumns="auto auto"
            >
                <Content/>
            </Box>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return { 
        cityWeeklyWeatherState: state.cityWeeklyWeatherState,
        cityCurrentWeather: state.modalState.cityCurrentWeather,
     }
};

const mapDispatchToProps = {
    fetchWeeklyWeatherListRequest,
    fetchWeeklyWeatherListSuccess,
    fetchWeeklyWeatherListFailure,
};

export default connectWithStore(mapStateToProps, mapDispatchToProps)(CityCard);