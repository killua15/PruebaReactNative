import apisSetProducts from '../apis/apisSetProduct';
//import getDataFromDatabaseFilter from '../apiDB/apiCarFilter'
export const SetProduct = data => {

    return {
        type: 'set_product',
    };
};
export const SetProductSuccsess = data => {
    return {
        type: 'set_product_succsess',
        data,
    };
};
export const SetProductError = data => {
    return {
        type: 'set_product_data_error',
        data,
    };
};

export const SetProductAction = (id, product_name, product_cost, product_image, deparmet, category) => {
    console.log("llegue")
    return dispatch => {
        dispatch(SetProduct());
        apisSetProducts(id, product_name, product_cost, product_image, deparmet, category)
            .then(json => {
                dispatch(SetProductSuccsess(json));
            })
            .catch(err => dispatch(SetProductError(err)));
    };
};
