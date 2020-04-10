import { useState, useEffect } from "react";
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

export default (title) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getQuery = (title) => {
        console.log('getting query')
        switch (title) {
            case "What's New":
                fetchData({ status: "For Sale" });
                return;
            case "Staff Picks":
                fetchData({ label: "RCA" });
                return;
            case 'New House':
                fetchData({ styles: { $regex: /house/, '$options': 'i' } });
                return;
            case 'New Techno':
                fetchData({ styles: { $regex: /techno/, '$options': 'i' } });
                return;
            case 'New Drum N Bass':
                fetchData({ styles: { $regex: /drum n bass/, '$options': 'i' } });
                return;
            case 'New Acid':
                fetchData({ styles: { $regex: /acid/, '$options': 'i' } });
                return;
            case 'New Hip-Hop':
                fetchData({ styles: { $regex: /hip hop/, '$options': 'i' } });
                return;
            case 'New Electro':
                fetchData({ styles: { $regex: /electro/, '$options': 'i' } });
                return;
            case 'New Deep House':
                fetchData({ styles: { $regex: /deep house/, '$options': 'i' } });
                return;
            default:
                return;
        }
    };

    const fetchData = (query) => {
        console.log('starting fetch')
        const mongodb = Stitch.defaultAppClient.getServiceClient(
            RemoteMongoClient.factory,
            'mongodb-atlas'
        );
        mongodb
            .db('shop')
            .collection('products')
            .find(query, { sort: { listing_id: -1 }, limit: 20 })
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
        getQuery(title);
    }, []);

    return [products, isLoading];
};