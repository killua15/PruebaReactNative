import apisProducts from '../apis/apisProducts';
//import getDataFromDatabaseFilter from '../apiDB/apiCarFilter'
export const Product = data => {

    return {
        type: 'get_product',
    };
};
export const ProductSuccsess = data => {
    return {
        type: 'get_product_succsess',
        data,
    };
};
export const ProductError = data => {
    return {
        type: 'get_product_data_error',
        data,
    };
};

export const ProductAction = () => {
    console.log("llegue")
    return dispatch => {
        dispatch(Product());
        apisProducts()
            .then(json => {
                dispatch(ProductSuccsess(json));
            })
            .catch(err => dispatch(ProductError(err)));
    };
};
