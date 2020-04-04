import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import ListItem from './ListItem';


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
    const navigation = useNavigation();

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
                    navigation={navigation}
                    renderItem={(item)=> ListItem(item, navigation)}
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
