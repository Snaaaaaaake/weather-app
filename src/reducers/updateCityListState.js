export default function updateCityListState(state, action) {
    switch(action.type) {
        case 'FETCH_CITY_LIST_REQUEST':
            return {
                cityList: [],
                isLoading: true,
                error: null,
            }
        case 'FETCH_CITY_LIST_SUCCESS':
            return {
                cityList: action.payload,
                isLoading: false,
                error: null,
            }
        case 'FETCH_CITY_LIST_FAILURE':
            return {
                cityList: [],
                isLoading: false,
                error: action.payload,
            }
        default: return state;
    }
}