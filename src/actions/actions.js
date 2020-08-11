const fetchBookListRequest = () => {
    return {
        type: "FETCH_CITY_LIST_REQUEST",
    }
};
const fetchBookListSuccess = (data) => {
    return {
        type: "FETCH_CITY_LIST_SUCCESS",
        payload: data,
    }
};
const fetchBookListFailure = (error) => {
    return {
        type: "FETCH_CITY_LIST_FAILURE",
        payload: error,
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

export {
    fetchBookListRequest,
    fetchBookListSuccess,
    fetchBookListFailure,
    openModalCity,
    closeModalCity,
};