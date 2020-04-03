import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ListItem from './ListItem';
import Colors from '../constants/Colors';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Itemfjoanusiaboufioabusliaujnclbcsu',
    },
];

const HomeList = ({ title }) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    {title}
                </Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    horizontal
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={ListItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </View>
    );
};

export default HomeList;

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.nearWhite
    },
    listContainer: {
        height: 195,
        paddingTop: 5,
        marginBottom: 10
    }
});
