import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import HomeListItem from './items/HomeListItem';
import useMoreProducts from '../../hooks/useMoreProducts';

const MoreList = ({ title, type, search, id }) => {
    const [products, isLoading] = useMoreProducts(type, search, id);
    const navigation = useNavigation();

    renderEmptyMore = () => {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Nothing else from this {type}</Text>
            </View>
        );
    }

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    {title}
                </Text>
            </View>

            <View style={styles.listContainer}>
                {isLoading
                    ? <View style={styles.activityContainer}>
                        <ActivityIndicator />
                    </View>
                    : <FlatList
                        horizontal
                        data={products}
                        keyExtractor={item => item._id.toString()}
                        navigation={navigation}
                        ListEmptyComponent={renderEmptyMore}
                        renderItem={(item) => HomeListItem(item, navigation)}
                        showsHorizontalScrollIndicator={false}
                    />}
            </View>
        </View>
    );
};

export default MoreList;

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
        marginBottom: '10rem',
    },
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: '70rem',
        paddingBottom: '70rem'
    },
    emptyContainer: {
        marginLeft: '100rem',
        justifyContent: 'center'
    },
    emptyText: {
        fontSize: '15rem',
        color: Colors.nearWhite
    }
});
