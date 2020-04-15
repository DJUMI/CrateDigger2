import { useState, useEffect } from "react";
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

export default (genre) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchDigData = (genre) => {
        const mongodb = Stitch.defaultAppClient.getServiceClient(
            RemoteMongoClient.factory,
            'mongodb-atlas'
        );
        mongodb
            .db('shop')
            .collection('products')
            .aggregate([{
                $match: {
                    styles: {
                        $regex: genre, '$options': 'i'
                    }
                }
            }, {
                $sample: {
                    size: 100
                }
            }])
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
        fetchDigData(genre);
    }, [genre]);

    return [products, isLoading];
};