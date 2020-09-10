import React, { useContext, useEffect } from 'react';
import { connect as connectWithStore } from 'react-redux';
import List from '@material-ui/core/List';
import {
    openModalCity,
    fetchCityListRequest,
    fetchCityListSuccess,
    fetchCityListFailure,
} from '../../actions/actions';
import ServiceContext from '../ServiceContext/ServiceContext';
import Spinner from '../Spinner/Spinner';
import ErrorElement from '../ErrorElement/ErrorElement';
import CityListItem from '../CityListItem/CityListItem';

const CityList = (props) => {
    const weatherService = useContext(ServiceContext);
    const {
        fetchCityListRequest,
        fetchCityListSuccess,
        fetchCityListFailure,
        trackingCities,
        openModalCity,
        cityListState,
    } = props;
    const { cityList, isLoading, error } = cityListState;

    useEffect(() => {
        fetchCityListRequest();
        weatherService.getCurrentWeather(trackingCities)
            .then(data => fetchCityListSuccess(data))
            .catch(err => fetchCityListFailure(err))
    }, [
        fetchCityListRequest,
        fetchCityListSuccess,
        fetchCityListFailure,
        trackingCities,
        weatherService
    ]);

    const onClickHandler = (city) => () => {
        openModalCity(city);
    }

    let Content;
    if (isLoading) {
        Content = () => <Spinner/>;
    } else if (error) {
        Content = () => <ErrorElement error={error}/>;
    } else {
        Content = () => (
            <List  component="nav" aria-label="main mailbox folders">
                {cityList.map(city =>
                    <CityListItem
                        key={`city${city.name}`}
                        clickHandler={onClickHandler(city)}
                        city={city}
                    />
                )}
            </List>
        );
    }
    return <Content/>
}

const mapStateToProps = (state) => {
    return {
        trackingCities: state.trackingCities,
        cityListState: state.cityListState
    }
};

const mapDispatchToProps = {
    openModalCity,
    fetchCityListRequest,
    fetchCityListSuccess,
    fetchCityListFailure,
};

export default connectWithStore(mapStateToProps, mapDispatchToProps)(CityList);