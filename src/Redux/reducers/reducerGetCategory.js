const INITIAL_STATE = {
    data: [],
    isFeching: false,
    error: false,
};
export default reducerGetProduct = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_categories':
            return {
                ...state,
                data: [],
                isFeching: true,
            };
        case 'get_categories_succsess':
            return {
                ...state,
                data: action.data,
                isFeching: false,
            };
        case 'get_categories_error':
            return {
                ...state,
                data: action.data,
                isFeching: false,
                error: true,
            };
        default:
            return state;
    }
};