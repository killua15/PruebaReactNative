import apisDepartment from '../apis/apisDeparment';
//import getDataFromDatabaseFilter from '../apiDB/apiCarFilter'
export const Department = data => {

    return {
        type: 'get_department',
    };
};
export const DepartmentSuccsess = data => {
    return {
        type: 'get_department_succsess',
        data,
    };
};
export const DepartmentError = data => {
    return {
        type: 'get_department_error',
        data,
    };
};

export const DepartmentAction = () => {
    console.log("llegue")
    return dispatch => {
        dispatch(Department());
        apisDepartment()
            .then(json => {
                dispatch(DepartmentSuccsess(json));
            })
            .catch(err => dispatch(DepartmentError(err)));
    };
};
