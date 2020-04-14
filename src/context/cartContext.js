import { Alert, AsyncStorage } from 'react-native';

import createDataContext from './createDataContext';

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'load_cart':
            return { cart: action.payload };
        case 'add_to_cart':
            const updatedItems = [...state.cart, action.payload];
            const updatedTotal = state.cartTotal + action.payload.price;
            Alert.alert('Added!');
            return { cart: updatedItems, cartTotal:  updatedTotal }
        case 'clear_cart':
            return { cart: [], cartTotal: 0 };
        case 'remove_from_cart':
            const filteredItems = state.cart.filter(item => {
                    return item.release_id !== action.payload.release_id
            });
            const newTotal = state.cartTotal - action.payload.price;
            return { cart: filteredItems, cartTotal: newTotal };
        default:
            return state;
    }
};

const loadCart = dispatch => async () => {    
    const cart = await AsyncStorage.getItem('cart');
    if (cart) {
        console.log('we found a cart in async storage')
        dispatch({ type: 'load_cart', payload: cart });
    }
};

const addToCart = (dispatch) => async (item) => {
    dispatch({ type: 'add_to_cart', payload: item });
};

const clearCart = dispatch => async () => {
    dispatch({ type: 'clear_cart' });
};

const removeFromCart = (dispatch) => async (item) => {
    dispatch({ type: 'remove_from_cart', payload: item });
};

export const { Provider, Context } = createDataContext(
    cartReducer,
    { loadCart, addToCart, clearCart, removeFromCart },
    { cart: [], cartTotal: 0 }
);