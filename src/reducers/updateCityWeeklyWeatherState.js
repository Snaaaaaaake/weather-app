export default function updateCityWeeklyWeatherState(state, action) {
    switch(action.type) {
        case 'FETCH_WEEKLY_WEATHER_LIST_REQUEST':
            return {
                cityWeeklyWeather: null,
                isLoading: true,
                error: null,
            }
        case 'FETCH_WEEKLY_WEATHER_LIST_SUCCESS':
            return {
                cityWeeklyWeather: action.payload,
                isLoading: false,
                error: null,
            }
        case 'FETCH_WEEKLY_WEATHER_LIST_FAILURE':
            return {
                cityWeeklyWeather: null,
                isLoading: false,
                error: action.payload,
            }
        default: return state;
    }
}