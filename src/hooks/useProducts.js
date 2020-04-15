import { useState, useEffect } from "react";
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

export default (type, genre) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getQuery = (type, genre) => {
        switch (type) {
            case 'new':
                fetchHomeListData({});
                return;
            case 'genre':
                fetchHomeListData({ styles: { $regex: genre, '$options': 'i' } });
                return;
            default:
                return;
        }
    };

    const fetchHomeListData = (query) => {
        console.log(`fetching home data: ${JSON.stringify(query)}`)
        const mongodb = Stitch.defaultAppClient.getServiceClient(
            RemoteMongoClient.factory,
            'mongodb-atlas'
        );
        mongodb
            .db('shop')
            .collection('products')
            .find(
                query,
                {
                    projection:
                    {
                        listing_id: 1,
                        image_url: 1,
                        title: 1
                    }
                },
                {
                    sort: { listing_id: -1 },
                    limit: 20
                })
            .asArray()
            .then(fetchedProducts => {
                setProducts(fetchedProducts);
            })
            .then(() => {
                setIsLoading(false);
            })
            .catch(err => {
                console.log(`Fetching products failed: ${err}`);
            });
    };

    useEffect(() => {
        getQuery(type, genre);
    }, []);

    return [products, isLoading];
};