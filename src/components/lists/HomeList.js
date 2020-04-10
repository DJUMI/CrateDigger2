import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import HomeListItem from './items/HomeListItem';
import useProducts from '../../hooks/useProducts';

const HomeList = ({ title }) => {
    const [products, isLoading] = useProducts(title);
    const navigation = useNavigation();

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
                        data={products}
                        keyExtractor={item => item._id.toString()}
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
        paddingTop: '85rem',
        paddingBottom: '85rem'
    }
});
