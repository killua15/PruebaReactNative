const INITIAL_STATE = {
    data: [],
    isFeching: false,
    error: false,
};
export default reducerGetProduct = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'set_product':
            return {
                ...state,
                data: [],
                isFeching: true,
            };
        case 'set_product_succsess':
            return {
                ...state,
                data: action.data,
                isFeching: false,
            };
        case 'set_product_data_error':
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