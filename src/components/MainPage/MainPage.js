import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CityList from '../CityList/CityList';
import ModalCityCard from '../ModalCityCard/ModalCityCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MainPage = () => 
    <Container my={20} maxWidth="xs">
        <Box py={5}>
            <Typography align="center" variant="h4">
                Погода на сегодня
            </Typography>
        </Box>
        <ErrorBoundary>
            <CityList />
        </ErrorBoundary>
        <ErrorBoundary>
            <ModalCityCard />
        </ErrorBoundary>
    </Container>

export default MainPage;