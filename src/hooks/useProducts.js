import { useState, useEffect } from "react";
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

export default (type, genre, format, price, query, sort) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getQuery = (type, genre, format, price, query, sort) => {
        switch (type) {
            case 'new':
                fetchHomeListData({ status: "For Sale" });
                return;
            case 'genre':
                fetchHomeListData({ styles: { $regex: genre, '$options': 'i' } });
                return;
            case 'dig':
                fetchDigData(genre);
                return;
            case 'search':
                fetchSearchListData(genre, format, price, query, sort);
                return;
            default:
                return;
        }
    };

    const fetchHomeListData = (query) => {
        console.log('fetching home data')
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

    const fetchDigData = (genre) => {
        console.log('fetching dig data')
        const mongodb = Stitch.defaultAppClient.getServiceClient(
            RemoteMongoClient.factory,
            'mongodb-atlas'
        );
        mongodb
            .db('shop')
            .collection('products')
            .aggregate([{
                $match: {
                    $and: [{
                        status: "For Sale"
                    }, {
                        styles: {
                            $regex: genre, '$options': 'i'
                        }
                    }]
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

    const fetchSearchListData = (genre, format, price, query, sort) => {
        console.log(`fetching search data query: ${query}`)
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
                //{ $or: [{ format: { $regex: format, '$options': 'i' } }] },
                //{ $or: [{ genre: { $regex: genre, '$options': 'i' } }] },
                ]
            },
                {
                    sort: { price: -1 }
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
        getQuery(type, genre, format, price, query, sort);
    }, [genre, price, query]);

    return [products, isLoading];
};