const INITIAL_STATE = {
    data: [],
    isFeching: false,
    error: false,
};
export default reducerGetProduct = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_department':
            return {
                ...state,
                data: [],
                isFeching: true,
            };
        case 'get_department_succsess':
            return {
                ...state,
                data: action.data,
                isFeching: false,
            };
        case 'get_department_error':
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