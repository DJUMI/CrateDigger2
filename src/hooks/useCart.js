import { useEffect, useState } from "react";
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

export default (type, user_id, listing_id) => {
    const [cart, setCart] = useState([]);

    const getType = (type, user_id, listing_id) => {
        switch (type) {
            case 'find':
                getItems(user_id);
                return;
            case 'add':
                addItem(user_id, listing_id);
                return;
            case 'remove':
                removeItem(user_id, listing_id);
                reutrn;
            case 'remove_all':
                removeAllItems(user_id);
                return;
            default:
                return;
        };
    }

    const getItems = (user_id) => {
        const mongodb = Stitch.defaultAppClient.getServiceClient(
            RemoteMongoClient.factory,
            'mongodb-atlas'
        );
        mongodb
            .db('shop')
            .collection('users')
            .findOne({ user_id: user_id }, { projection: { cart: 1 } })
            .then(fetchedCart => {
                console.log(`fetched cart: ${fetchedCart}`);
                setCart(fetchedCart);
            })
            .catch(err => {
                console.log(`Fetching products failed: ${err}`);
            });
    };

    const addItem = (user_id, listing_id) => {
        const updatedCart = [...cart, listing_id];
        const mongodb = Stitch.defaultAppClient.getServiceClient(
            RemoteMongoClient.factory,
            'mongodb-atlas'
        );
        mongodb
            .db('shop')
            .collection('users')
            .findOneAndUpdate({ user_id: user_id }, { $set: { cart: updatedCart } })
            .catch(err => {
                console.log(`Fetching products failed: ${err}`);
            });
    };

    const removeItem = () => {

    };

    const removeAllItems = () => {

    };

    useEffect(() => {
        getType(type, user_id, listing_id);
    }, [type]);

    return [cart];
};