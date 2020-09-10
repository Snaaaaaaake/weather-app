export default function updateModalState(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL_CITY':
            return {
                isModalOpened: true,
                cityCurrentWeather: action.payload,
            };
        case 'CLOSE_MODAL_CITY':
            return {
                isModalOpened: false,
                cityCurrentWeather: null,
            };
        default: return state;
    }
} 