import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import HomeListItem from './items/HomeListItem';
import { Context as ShopContext } from '../../context/shopContext';

const HomeList = ({ title }) => {
    const [isLoading, setIsLoading] = useState();
    const [query, setQuery] = useState({});
    const { state, fetchProducts } = useContext(ShopContext);
    const navigation = useNavigation();

    const getQuery = () => {
        switch (title) {
            case "What's New":
                setQuery({ query: { status: "For Sale" } });
                return;
            case "Staff Picks":
                setQuery({ query: { label: "RCA" } });
                return;
            case 'New House':
                setQuery({ query: { styles: { $regex: /house/, '$options': 'i' } } });
                return;
            case 'New Techno':
                setQuery({ query: { styles: { $regex: /techno/, '$options': 'i' } } });
                return;
            case 'New Drum n Bass':
                setQuery({ query: { styles: { $regex: /drum n bass/, '$options': 'i' } } });
                return;
            case 'New Acid':
                setQuery({ query: { styles: { $regex: /acid/, '$options': 'i' } } });
                return;
            case 'New Hip-Hop':
                setQuery({ query: { styles: { $regex: /hip hop/, '$options': 'i' } } });
                return;
            case 'New Electro':
                setQuery({ query: { styles: { $regex: /electro/, '$options': 'i' } } });
                return;
            case 'New Deep House':
                setQuery({ query: { styles: { $regex: /deep house/, '$options': 'i' } } });
                return;
            default:
                return;
        }
    };

    useEffect(() => {
        getQuery();
    }, []);

    useEffect(() => {
        fetchProducts(query);
    }, [query]);

    return (
        isLoading
            //list is loading
            ? <View style={styles.activityContainer}>
                <ActivityIndicator />
            </View>
            //loading complete
            : <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        {title}
                    </Text>
                </View>

                <View style={styles.listContainer}>
                    <FlatList
                        horizontal
                        data={state.products}
                        keyExtractor={item => item._id}
                        navigation={navigation}
                        renderItem={(item) => HomeListItem(item, navigation)}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
    );
};

export default HomeList;

const styles = EStyleSheet.create({
    headerContainer: {
        paddingHorizontal: '15rem',
        paddingVertical: '5rem'
    },
    header: {
        fontSize: '25rem',
        fontWeight: 'bold',
        color: Colors.nearWhite
    },
    listContainer: {
        height: '195rem',
        paddingTop: '5rem',
        marginBottom: '10rem'
    },
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: '85rem'
    }
});
