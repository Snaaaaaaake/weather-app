import initialCityList from '../constants/initialCityList';

const initialState = {
    error: null,
    isLoading: true,
    isModalOpened: false,
    cityList: [],
    city: null,
    trackingCities: initialCityList,
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'FETCH_CITY_LIST_REQUEST':
            return {
                ...state,
                cityList: [],
                isLoading: true,
                error: null,
            };
        case 'FETCH_CITY_LIST_SUCCESS':
            return {
                ...state,
                cityList: action.payload,
                isLoading: false,
                error: null,
            };
        case 'FETCH_BOOK_LIST_FAILURE':
            return {
                ...state,
                cityList: [],
                isLoading: false,
                error: action.payload,
            };
        case 'OPEN_MODAL_CITY':
            return {
                ...state,
                isModalOpened: true,
                city: action.payload,
            };
        case 'CLOSE_MODAL_CITY':
            return {
                ...state,
                isModalOpened: false,
            };
        default: return state;
    }
}

export default reducer;