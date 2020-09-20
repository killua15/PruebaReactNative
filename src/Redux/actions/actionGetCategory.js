import apisCategories from '../apis/apisCategory';
//import getDataFromDatabaseFilter from '../apiDB/apiCarFilter'
export const Categories = data => {

    return {
        type: 'get_categories',
    };
};
export const CategoriesSuccsess = data => {
    return {
        type: 'get_categories_succsess',
        data,
    };
};
export const CategoriesError = data => {
    return {
        type: 'get_categories_error',
        data,
    };
};

export const CategoriesAction = () => {
    console.log("llegue")
    return dispatch => {
        dispatch(Categories());
        apisCategories()
            .then(json => {
                dispatch(CategoriesSuccsess(json));
            })
            .catch(err => dispatch(CategoriesError(err)));
    };
};
