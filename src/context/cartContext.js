import { Alert } from 'react-native';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

import createDataContext from './createDataContext';

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'load_cart':
            let updatedItems = [...state.cart, action.payload];
            let updatedTotal = state.cartTotal + action.payload.price;
            return { cart: updatedItems, cartTotal: updatedTotal }
        case 'add_to_cart':
            updatedItems = [...state.cart, action.payload];
            updatedTotal = state.cartTotal + action.payload.price;
            Alert.alert('Added!');
            return { cart: updatedItems, cartTotal: updatedTotal }
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

const loadCart = dispatch => async (user) => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
        RemoteMongoClient.factory,
        'mongodb-atlas'
    );
    mongodb
        .db('shop')
        .collection('cartItems')
        .find({ user_id: user })
        .toArray()
        .then(fetchedCart => {
            fetchedCart.forEach(item => {
                mongodb
                    .db('shop')
                    .collection('products')
                    .findOne({ listing_id: item.listing_id })
                    .then(item => {
                        dispatch({ type: 'load_cart', payload: item });
                    });
            })
        });
};

const addToCart = (dispatch) => async (user, item) => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
        RemoteMongoClient.factory,
        'mongodb-atlas'
    );
    mongodb
        .db('shop')
        .collection('cartItems')
        .updateOne(
            { user_id: user, listing_id: item.listing_id },
            { $setOnInsert: { user_id: user }, $setOnInsert: { listing_id: item.listing_id } },
            { upsert: true }
        )
        .then(matched => {
            if (matched.matchedCount != 0) {
                Alert.alert('Item is already in your cart!');
            } else {
                dispatch({ type: 'add_to_cart', payload: item });
            }
        })
    //.find({ $and: [{ user_id: user }, { listing_id: item.listing_id }]})
    // dispatch({ type: 'add_to_cart', payload: item });
};

const clearCart = dispatch => async (user) => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
        RemoteMongoClient.factory,
        'mongodb-atlas'
    );
    mongodb
        .db('shop')
        .collection('cartItems')
        .deleteMany({ user_id: user })
        .then(() => {
            dispatch({ type: 'clear_cart' });
        })
};

const removeFromCart = (dispatch) => async (item) => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
        RemoteMongoClient.factory,
        'mongodb-atlas'
    );
    mongodb
        .db('shop')
        .collection('cartItems')
        .deleteOne({ listing_id: item.listing_id })
        .then(() => {
            dispatch({ type: 'remove_from_cart', payload: item });
        })
};

export const { Provider, Context } = createDataContext(
    cartReducer,
    { loadCart, addToCart, clearCart, removeFromCart },
    { cart: [], cartTotal: 0 }
);