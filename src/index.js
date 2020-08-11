import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import store from './store';
import App from './components/App/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ServiceContext from './components/ServiceContext/ServiceContext';
import WeatherService from './api/WeatherService';

const weatherService = new WeatherService();

ReactDOM.render(
  <StoreProvider store={store}>
    <ErrorBoundary>
      <ServiceContext.Provider value={weatherService}>
        <App />
      </ServiceContext.Provider>
    </ErrorBoundary>
  </StoreProvider>,
  document.getElementById('root')
);
