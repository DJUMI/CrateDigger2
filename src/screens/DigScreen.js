import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import Colors from '../constants/Colors';
import DATA from '../constants/DATA';
import DigCard from '../components/lists/items/DigCard';

const DigScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Genre</Text>
            <Swiper
                backgroundColor={Colors.darkBlue}
                cardHorizontalMargin={10}
                cards={DATA}
                renderCard={(card) => DigCard(card, navigation)}
                stackSize={2}
            />
        </SafeAreaView>
    );
};

export default DigScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlue
    },
    header: {
        color: Colors.nearWhite,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        alignSelf: 'center'
    }
});
