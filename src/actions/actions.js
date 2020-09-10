const fetchCityListRequest = () => {
    return {
        type: "FETCH_CITY_LIST_REQUEST",
    }
};
const fetchCityListSuccess = (data) => {
    return {
        type: "FETCH_CITY_LIST_SUCCESS",
        payload: data,
    }
};
const fetchCityListFailure = (data) => {
    return {
        type: "FETCH_CITY_LIST_FAILURE",
        payload: data,
    }
};

const openModalCity = (data) => {
    return {
        type: "OPEN_MODAL_CITY",
        payload: data,
    }
}
const closeModalCity = () => {
    return {
        type: "CLOSE_MODAL_CITY",
    }
}

const fetchWeeklyWeatherListRequest = () => {
    return {
        type: "FETCH_WEEKLY_WEATHER_LIST_REQUEST",
    }
};
const fetchWeeklyWeatherListSuccess = (data) => {
    return {
        type: "FETCH_WEEKLY_WEATHER_LIST_SUCCESS",
        payload: data,
    }
};
const fetchWeeklyWeatherListFailure = (data) => {
    return {
        type: "FETCH_WEEKLY_WEATHER_LIST_FAILURE",
        payload: data,
    }
};

export {
    fetchCityListRequest,
    fetchCityListSuccess,
    fetchCityListFailure,
    openModalCity,
    closeModalCity,
    fetchWeeklyWeatherListRequest,
    fetchWeeklyWeatherListSuccess,
    fetchWeeklyWeatherListFailure,
};