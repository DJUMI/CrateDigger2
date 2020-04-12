import { useState, useEffect } from "react";
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

export default (prodId) => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([]);

    const fetchData = (prodId) => {
        console.log('starting fetch')
        const mongodb = Stitch.defaultAppClient.getServiceClient(
            RemoteMongoClient.factory,
            'mongodb-atlas'
        );
        mongodb
            .db('shop')
            .collection('products')
            .findOne({ listing_id: prodId}, { sort: { listing_id: -1 }, limit: 20 })
            .then(fetchedProduct => {
                setProduct(fetchedProduct);
            })
            .then(() => {
                setIsLoading(false);
            })
            .catch(err => {
                console.log(`Fetching products failed: ${err}`);
            });
    };

    useEffect(() => {
        fetchData(prodId)
    }, []);

    return [product, isLoading];
};