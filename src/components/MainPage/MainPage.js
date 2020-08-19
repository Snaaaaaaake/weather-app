import React, { useEffect, useContext } from 'react';
import { connect as connectWithStore } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CityList from '../CityList/CityList';
import ModalCityCard from '../ModalCityCard/ModalCityCard';
import Container from '@material-ui/core/Container';
import {
    fetchBookListRequest,
    fetchBookListSuccess,
    fetchBookListFailure,
} from '../../actions/actions';
import ServiceContext from '../ServiceContext/ServiceContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MainPage = (props) => {
    const weatherService = useContext(ServiceContext);
    const {
        fetchBookListRequest,
        fetchBookListSuccess,
        fetchBookListFailure,
        trackingCities, 
    } = props;

    useEffect(() => {
        fetchBookListRequest();
        weatherService.getData(trackingCities)
            .then(data => fetchBookListSuccess(data))
            .catch(err => fetchBookListFailure(err))
    }, [
        fetchBookListRequest,
        fetchBookListSuccess,
        fetchBookListFailure,
        trackingCities,
        weatherService
    ]);

    return (
        <Container my={20} maxWidth="xs">
            <Box py={5}>
                <Typography align="center" variant="h4">Погода на сегодня</Typography>
            </Box>
            <ErrorBoundary>
                <CityList />
            </ErrorBoundary>
            <ErrorBoundary>
                <ModalCityCard />
            </ErrorBoundary>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        trackingCities: state.trackingCities,
    }
};

const mapDispatchToProps = {
    fetchBookListRequest,
    fetchBookListSuccess,
    fetchBookListFailure,
};

export default connectWithStore(mapStateToProps, mapDispatchToProps)(MainPage);