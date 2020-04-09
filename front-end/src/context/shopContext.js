import createDataContext from './createDataContext';
import myApi from '../api/crateDigger';

const shopReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_products':
            return { errorMessage: '', products: action.payload}
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
};

const fetchProducts = (dispatch) => async (query) => {
    try {
        console.log('attempting to fetch products');
        const res = await myApi.get(`/shop/products/${query}`);
        dispatch({ type: 'fetch_products', payload: res.data });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with finding the products.' })
    }
};


const getProduct = (dispatch) => {
    return async ({ prodId }) => {
        try {
            const res = await myApi.get(`/shop/products:${prodId}`);
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with finding the product.' })
        }
    };
};

export const { Provider, Context } = createDataContext(
    shopReducer,
    { fetchProducts, getProduct },
    { products: [], errorMessage: '' }
);