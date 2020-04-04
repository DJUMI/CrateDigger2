import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import DATA from '../../constants/DATA';
import HomeListItem from './items/HomeListItem';

const HomeList = ({ title }) => {
    const [isLoading, setIsLoading] = useState(false);
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
                        data={DATA}
                        keyExtractor={item => item.id}
                        navigation={navigation}
                        renderItem={(item) => HomeListItem(item, navigation)}
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
    },
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 85,
    }
});
