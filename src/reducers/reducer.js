import initialCityList from '../constants/initialCityList';
import updateCityListState from './updateCityListState';
import updateModalState from './updateModalState';
import updateCityWeeklyWeatherState from './updateCityWeeklyWeatherState';

const initialState = {
    trackingCities: initialCityList,
    cityListState: {
        cityList: [],
        error: null,
        isLoading: true,
    },
    modalState: {
        isModalOpened: false,
        cityCurrentWeather: null,
    },
    cityWeeklyWeatherState: {
        cityWeeklyWeather: null,
        error: null,
        isLoading: true,
    },
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    return {
        ...state,
        cityListState: updateCityListState(state.cityListState, action),
        modalState: updateModalState(state.modalState, action),
        cityWeeklyWeatherState: updateCityWeeklyWeatherState(state.cityWeeklyWeatherState, action),
    }
}

export default reducer;