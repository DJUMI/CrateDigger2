import { useState, useEffect } from "react";
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

export default (genre, format, price, query, sort) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchSearchListData = (genre, format, price, query, sort) => {
        setIsLoading(true);
        const mongodb = Stitch.defaultAppClient.getServiceClient(
            RemoteMongoClient.factory,
            'mongodb-atlas'
        );
        mongodb
            .db('shop')
            .collection('products')
            .find({
                $and: [{
                    $or: [{ label: { $regex: query, '$options': 'i' } },
                    { artist: { $regex: query, '$options': 'i' } },
                    { title: { $regex: query, '$options': 'i' } }]
                },
                { price: { $lte: price } },
                format,
                genre
                ]
            },
                sort
            )
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
        fetchSearchListData(genre, format, price, query, sort);
    }, [genre, format, price, query, sort]);

    return [products, isLoading];
};