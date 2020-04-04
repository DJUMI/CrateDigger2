import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DeckSwiper } from 'native-base';

import Colors from '../constants/Colors';
import DigCard from '../components/DigCard';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image_url: ''
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image_url: ''
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Itemfjoanusiaboufioabusliaujnclbcsu',
        image_url: ''
    }
];

const DigScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Genre</Text>
            <DeckSwiper
                dataSource={DATA}
                renderItem={(item) => DigCard(item, navigation)}
            />
        </SafeAreaView>
    );
};

export default DigScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlue,
        paddingTop: 15,
        paddingHorizontal: 10
    },
    header: {
        color: Colors.nearWhite,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        alignSelf: 'center'
    }
});
